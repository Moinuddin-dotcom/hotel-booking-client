import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { LuFolderSync } from 'react-icons/lu'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'
import toast from 'react-hot-toast'
import UserReviews from './UserReviews'

const MyBookingTable = ({ table, handleDelete }) => {
    const { _id, rommImage, roomType, checkIn, checkOut, price, userName, userEmail } = table
    // console.log(_id)
    const [startDate, setStartDate] = useState(new Date(checkIn))
    const [endDate, setEndDate] = useState(new Date(checkOut))

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
            const res = await fetch(`http://localhost:8001/bookedHotel/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ checkIn: startDate }),
                // dd-MM-yyyy
            })
            const data = await res.json()
            console.log("Update is done", data)
            toast.success('Date Updated successful')
        } catch (error) {
            toast.error('Update not possible', error)
        }

    }
    const updateEndDate = async () => {
        // console.log("Lets update start date")
        try {
            const res = await fetch(`http://localhost:8001/bookedHotel/${_id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ checkOut: endDate }),
                // dd-MM-yyyy
            })
            const data = await res.json()
            console.log("Update is done", data)
            toast.success('Date Updated successful')
        } catch (error) {
            toast.error('Update not possible', error)
        }
    }




    return (
        <tr>
            <th>
                {/* {table.length} */}
                <FaArrowRight />
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
                            <div>
                                <label className='text-gray-700'> Check-In:</label>
                                <DatePicker
                                    className='border p-1 rounded-md'
                                    selected={new Date(startDate)}
                                    onChange={(date) => handleStartDateChange(date)}
                                />
                            </div>
                            <button onClick={updateStartDate} className="btn btn-sm btn-warning"> Update </button>
                        </div>
                        <div className="text-sm  flex justify-center items-center gap-2">
                            <div className='flex justify-center items-center'>
                                <label className='text-gray-700'>Check-out:</label>
                                <DatePicker
                                    className='border p-1 rounded-md'
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

                {userName}
                <br />
                <span className="badge badge-ghost badge-sm"> {userEmail}</span>
            </td>
            <td>BDT:{price}/-</td>
            <td>
                <button
                    onClick={() => document.getElementById('my_modal_2').showModal()}
                    className="btn btn-sm">Share your thougts</button>
            </td>
            <th>

                <MdOutlineRemoveShoppingCart className='text-2xl hover:text-3xl text-red-900' onClick={() => handleDelete(_id)} />

            </th>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>open modal</button> */}
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <UserReviews />
                   
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </tr>

    )
}

export default MyBookingTable
