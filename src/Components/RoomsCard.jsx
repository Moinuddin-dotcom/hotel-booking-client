import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RoomsCard = () => {
    const { id } = useParams()
    // console.log(id)
    const [rooms, setRooms] = useState({})
    const [review, setreview] = useState()


    const roomsData = async () => {
        const response = await fetch(`http://localhost:8001/rooms/${id}`)
        const data = await response.json()
        setRooms(data)
        // console.log(data)
    }

    useEffect(() => {
        roomsData()

    }, []);

    const { room_type, adults, checkIn, checkOut, roomsLeft, originalPrice,
        discountedPrice, totalPrice, image, package_name, package_price
    } = rooms || {}

    const reviewFrom = (e) => {
        e.preventDefault()
        const review = e.target.review.value
        console.log(review)
        setreview(review)
        e.target.reset()
    }



    return (
        <>

            <div className='hero border-2 w-full bg-center bg-cover min-h-screen'
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-content flex-col lg:flex-row gap-20 border-2 bg-green-900/70">
                    <div>
                        <img
                            src={image}
                            className="max-w-xl rounded-lg shadow-2xl" />
                    </div>
                    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border">
                        {/* Content Section */}
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{room_type}</h2>

                            <div className="space-y-2 text-gray-600">
                                <div className="flex items-center">
                                    {/* <span className="mr-2">🛏️</span>{rooms} Room */}
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">👥</span>{adults} Adults
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">📅</span>Check-in: {checkIn}
                                    {/* <label htmlFor="Check-in:">Check-in:</label> */}
                                    {/* <input type="date" name="" id="" /> */}
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2">📅</span>Check-out: {checkOut}
                                </div>
                            </div>

                            {/* Package Section */}
                            <div className="mt-4">
                                <p className="text-sm font-semibold">Select Room Package</p>
                                <div className="flex items-center mt-2">
                                    <input
                                        type="radio"
                                        name="package"
                                        className="radio radio-primary mr-2"
                                        defaultChecked
                                    />
                                    <span>{package_name}</span>
                                    <span className="ml-auto font-bold text-gray-800">৳{package_price}</span>
                                </div>
                            </div>

                            {/* Availability Section */}
                            <p className="mt-4 text-sm text-red-500 font-semibold">
                                Only {roomsLeft} rooms left
                            </p>

                            {/* Review section */}
                            {
                                review ? <div>see all review</div>
                                    :
                                    <div>
                                        <form onSubmit={reviewFrom}>
                                            <label className='text-gray-700 ' htmlFor='description'>
                                                Give review
                                            </label>
                                            <textarea
                                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                                name='description'
                                                id='review'>
                                            </textarea>
                                            <input type="submit" value="Submit" className='btn btn-sm mt-1' />
                                        </form>
                                    </div>
                            }

                            {/* Pricing Section */}
                            <div className="flex items-center justify-between mt-4">
                                <div>
                                    <p className="text-lg font-bold text-green-600">৳{discountedPrice}</p>
                                    <p className="text-sm line-through text-gray-500">৳{originalPrice}</p>
                                    <p className="text-sm text-gray-600">
                                        ৳{totalPrice} (total including taxes & fees)
                                    </p>
                                </div>
                                {/* <button className="btn btn-primary">Book Now</button> */}
                            </div>

                            {/* Price Details */}
                            <p className="mt-2 text-sm text-blue-500 underline cursor-pointer">
                                Price Details
                            </p>
                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary mt-5">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    {/* <h3 className="font-bold text-lg">Hello!</h3> */}
                    <p className="py-4">Check-in: {checkIn}</p>
                    <p className="py-4">Check-out: {checkOut}</p>
                    <p className="py-4">৳{totalPrice} (total including taxes & fees)</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default RoomsCard

















