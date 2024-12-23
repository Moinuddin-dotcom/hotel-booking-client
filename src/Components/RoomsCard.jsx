import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../Hooks/useAuth';

const RoomsCard = () => {
    const { id } = useParams()
    const { user } = useAuth()
    // console.log(user)
    const [rooms, setRooms] = useState({})
    const [soldRoom, setSoldRoom] = useState(0);
    const [startDate, setStartDate] = useState(new Date())
    // 
    const [endDate, setEndDate] = useState(new Date())
    // const [review, setreview] = useState(true)
    // console.log(review)


    const roomsData = async () => {
        const response = await fetch(`http://localhost:8001/rooms/${id}`)
        const data = await response.json()
        setRooms(data)
        setSoldRoom(data.roomsLeft)
        console.log(data)
    }

    useEffect(() => {
        roomsData()

    }, []);

    const { _id,room_type, adults, roomsLeft, originalPrice,
        discountedPrice, totalPrice, image, package_name, package_price,

    } = rooms || {}

    const reviewFrom = async (e) => {
        e.preventDefault()
        const reviewdata = e.target.review.value
        console.log(reviewdata)
        // setreview(false)
        // e.target.reset()
        const res = await fetch(`http://localhost:8001/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ reviewdata })
        })
        const data = await res.json()
        console.log(data)
        setreview(false, data)
    }

    const handleModalFrom = async (e) => {
        e.preventDefault()
        const roomId = _id
        const rommImage = image
        const roomType = room_type
        const checkIn = startDate
        const checkOut = endDate
        const price = totalPrice
        const userName = user?.displayName
        const userEmail = user?.email

        // const roomsLeft = roomsLeft
        const modalData = {roomId, rommImage, roomType, checkIn, checkOut, price, userName, userEmail }
        console.log(modalData)
        document.getElementById('my_modal_5').close();

        // Check if room is available
        if (soldRoom <= 0) {
            return toast.error('Room is not available')
        }
        // if (soldRoom > 0) return toast.success('Room Confimred')
        const updatedRoomsLeft = soldRoom - 1;
        setSoldRoom(updatedRoomsLeft);

        // fetch for booking hotel information added by user email
        // const bookingData = { roomType, checkIn, checkOut, price, userName, userEmail }
        const response = await fetch(`http://localhost:8001/bookedHotel`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modalData)
        })
        const bookingDataRes = await response.json()
        console.log(bookingDataRes)





        // fetch for room left 
        const res = await fetch(`http://localhost:8001/rooms/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ roomsLeft: updatedRoomsLeft })
        })
        const updatedData = await res.json()
        console.log(updatedData)
        roomsData()

    }

    const confirmation = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",

            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
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
                    <div className=" bg-white shadow-md rounded-lg overflow-hidden border">
                        <form  >
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
                                    <div className="flex items-center gap-3">
                                        {/* <span className="mr-2">📅</span>Check-in: {checkIn} */}
                                        <div>
                                            <label className='text-gray-700'> Check-In:</label>
                                            {/* Date Picker Input Field */}
                                            <DatePicker
                                                className='border p-2 rounded-md'
                                                selected={startDate}
                                                onChange={date => setStartDate(date)}
                                            />
                                        </div>
                                        <div>
                                            <label className='text-gray-700'>Check-out:</label>

                                            {/* Date Picker Input Field */}
                                            <DatePicker
                                                className='border p-2 rounded-md'
                                                selected={endDate}
                                                onChange={date => setEndDate(date)}
                                            />
                                        </div>

                                    </div>
                                    {/* <div className="flex items-center">
                                    <span className="mr-2">📅</span>Check-out: {checkOut}
                                </div> */}
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
                                {/* {
                                review ?
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

                                    :
                                    <div>
                                        <Link to={'/#'} className='font-semibold text-blue-600 underline '>see all review</Link>
                                    </div>
                            } */}

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
                            </div>
                        </form>
                        <div className='text-center mb-2'>

                            <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-wide btn-primary mt-5" >Book Now</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleModalFrom} method="dialog">
                        <div>
                            <label className='text-gray-700'> Check-In:</label>
                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                            />
                        </div>
                        <div>
                            <label className='text-gray-700'>Check-out:</label>

                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                            />
                        </div>
                        <input type="text" />
                        <p className="py-4">৳{totalPrice} (total including taxes & fees)</p>
                        <input type="submit" value="Confirm" className='btn' />
                    </form>
                </div>
            </dialog>
        </>
    )
}


export default RoomsCard

















