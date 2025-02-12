import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAuth from '../Hooks/useAuth';
import { Helmet } from 'react-helmet';
import axios from 'axios';

const RoomsCard = () => {
    const { id } = useParams()
    const { user } = useAuth()
    // console.log(user)
    const [rooms, setRooms] = useState({})
    const [soldRoom, setSoldRoom] = useState(0);
    const [startDate, setStartDate] = useState(new Date())

    const [endDate, setEndDate] = useState(new Date())
    // const [updateReview, setupdateReview] = useState([])
    // console.log(updateReview)


    const roomsData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms/${id}`)
        setRooms(data)
        setSoldRoom(data.roomsLeft)
        // console.log(data)
    }

    useEffect(() => {
        roomsData()

    }, []);

    const { _id, room_type, adults, roomsLeft, originalPrice,
        discountedPrice, totalPrice, image, package_name, package_price

    } = rooms || {}
    // console.log(_id)



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

        const modalData = { roomId, rommImage, roomType, checkIn, checkOut, price, userName, userEmail }
        // console.log(modalData)
        document.getElementById('my_modal_5').close();

        // Check if room is available
        if (soldRoom <= 0) {
            return toast.error('Room is not available')
        }

        else {
            Swal.fire({
                title: 'Confirm Booking?',
                text: `Check-in: ${format(startDate, 'dd-MM-yyyy')} \n Check-out: ${format(endDate, 'dd-MM-yyyy')}`,
                icon: 'question',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Book Now!'
            }).then(result => {
                if (result.isConfirmed) {
                    // handleBooking()
                    toast.success('Room Confimred')
                }
            })
        }
        // if (soldRoom > 0) return toast.success('Room Confimred')
        const updatedRoomsLeft = soldRoom - 1;
        setSoldRoom(updatedRoomsLeft);

        // fetch for booking hotel information added by user email
        // const { data } = 
        await axios.post(`${import.meta.env.VITE_API_URL}/bookedHotel`, modalData)
        // console.log(data)





        // fetch for room left 
        // const { data } = 
        await axios.put(`${import.meta.env.VITE_API_URL}/rooms/${id}`, { roomsLeft: updatedRoomsLeft })
        roomsData()
    }





    return (
        <>
            <Helmet>
                <title>Room Details | The Peninsula</title>
            </Helmet>
            <div className='hero border-2 bg-center bg-cover min-h-screen'
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="max-w-[80vw] mx-auto hero-content flex-col lg:flex-row border-2 bg-green-900/70">
                    <div>
                        <img
                            src={image}
                            className="max-w-sm lg:max-w-sm xl:max-w-lg rounded-lg shadow-2xl" />
                    </div>
                    <div className="bg-white max-w-sm shadow-md rounded-lg overflow-hidden border animate__animated animate__bounce">
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

                                {/* Pricing Section */}
                                <div className="flex items-center justify-between mt-4">
                                    <div>
                                        <p className="text-lg font-bold text-green-600">৳{discountedPrice}</p>
                                        <p className="text-sm line-through text-gray-500">৳{originalPrice}</p>
                                        <p className="text-sm text-gray-600">
                                            ৳{totalPrice} (total including taxes & fees)
                                        </p>
                                    </div>
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

            <dialog id="my_modal_5" className="modal">
                <div className="modal-box  w-11/12 max-w-4xl text-center space-y-5 bg-gradient-to-r from-[#20312B] to-[#3A524B] text-white">
                    <form onSubmit={handleModalFrom} method="dialog" className='space-y-4'>
                        <div className='space-x-4'>
                            <label className=' text-white'> Check-In:</label>
                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                disabled
                            />
                        </div>
                        <div className='space-x-4'>
                            <label className=' text-white'>Check-out:</label>
                            {/* Date Picker Input Field */}
                            <DatePicker
                                className='border p-2 rounded-md'
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                disabled
                            />
                        </div>
                        <p className="py-4 underline">৳{totalPrice} (total including taxes & fees)</p>
                        <input type="submit" value="Confirm" className='btn bg-gradient-to-t from-[#20312B] to-[#ced8d1] text-white' />
                    </form>
                </div>
                <form method="dialog" className="modal-backdrop bg-gradient-to-t from-[#20312B] to-[#ced8d1] text-white">
                    <button className=''>close</button>
                </form>
            </dialog>
        </>
    )
}


export default RoomsCard

















