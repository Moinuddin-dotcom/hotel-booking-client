import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { LuFolderSync } from 'react-icons/lu'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import toast from 'react-hot-toast'
import UserReviews from './UserReviews'
import axios from 'axios'

const MyBookingTable = ({ table, handleDelete }) => {
    const { _id, rommImage, roomType, checkIn, checkOut, price, userName, userEmail } = table
    // console.log(_id)
    const [startDate, setStartDate] = useState(new Date(checkIn))
    const [endDate, setEndDate] = useState(new Date(checkOut))
    // const [updateReview, setUpdateReview] = useState(review)
    // console.log(updateReview)

    const handleStartDateChange = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        setStartDate(formattedDate);
    };

    const handleEndDateChange = (date) => {
        const formattedDate = date.toISOString().split('T')[0];
        setEndDate(formattedDate);
    };

    const updateStartDate = async () => {
        try {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/bookedHotel/${_id}`, { checkIn: startDate })
            console.log("Update is done", data)
            toast.success('Date Updated successful')
        } catch (error) {
            toast.error('Update not possible', error)
        }

    }
    const updateEndDate = async () => {
        // console.log("Lets update start date")
        try {
            const { data } = await axios(`${import.meta.env.VITE_API_URL}/bookedHotel/${_id}`, { checkOut: endDate })

            console.log("Update is done", data)
            toast.success('Date Updated successful')
        } catch (error) {
            toast.error('Update not possible', error)
        }
    }




    return (
        <tr className='border-b border-[#98d2d1]'>
            <th>
                <FaArrowRight />
                {/* {idx + 1} */}
            </th>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={rommImage}
                                alt="Room Image" />
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <div className="font-bold">{roomType}</div>
                        <div className="text-sm  flex justify-center items-center gap-2">
                            <div className='space-x-5'>
                                <label className='text-black'> Check-In:</label>
                                <DatePicker
                                    className='border p-1 rounded-md text-black'
                                    selected={new Date(startDate)}
                                    onChange={(date) => handleStartDateChange(date)}
                                />
                            </div>
                            <button onClick={updateStartDate} className="btn btn-sm btn-warning"> Update </button>
                        </div>
                        <div className="text-sm  flex justify-center items-center gap-2">
                            <div className='space-x-5'>
                                <label className='text-black'>Check-out:</label>
                                <DatePicker
                                    className='border p-1 rounded-md text-black'
                                    selected={new Date(endDate)}
                                    onChange={(date) => handleEndDateChange(date)}
                                />
                            </div>
                            <button onClick={updateEndDate} className="btn btn-sm btn-warning"> Update </button>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <span className='text-black ml-2'>

                    {userName}
                </span>
                <br />
                <span className="badge badge-ghost badge-sm "> {userEmail}</span>
            </td>
            <td className='text-black'>BDT:{price}/-</td>
            <td>
                <button
                    onClick={() => document.getElementById('my_modal_2').showModal()}
                    className="btn btn-sm border-2 border-[#98d2d1] hover:border-amber-400 rounded-lg bg-[#6bba5e0d] hover:bg-[#6bba5e0d]">Share your thougts</button>
            </td>
            <th>

                <MdOutlineRemoveShoppingCart className='text-2xl hover:text-3xl text-red-500 cursor-pointer' onClick={() => handleDelete(_id)} />

            </th>
            <dialog id="my_modal_2" className="modal bg-gradient-to-t from-[#20312B] to-[#ced8d1] text-black">
                <div className="modal-box">
                    <UserReviews bookingId={_id} />

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </tr>

    )
}

export default MyBookingTable
