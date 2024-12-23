import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { LuFolderSync } from 'react-icons/lu'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { format } from 'date-fns'

const MyBookingTable = ({ table, handleDelete }) => {
    // const [startDate, setStartDate] = useState(new Date())
    // const [endDate, setEndDate] = useState(new Date())
    // const {roomType} = table 
    const { _id, rommImage, roomType, checkIn, checkOut, price, userName, userEmail } = table

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
                    <div>
                        <div className="font-bold">{roomType}</div>
                        <div className="text-sm opacity-50">
                            Check In: {checkIn}
                            {/* Date Picker Input Field */}
                            {/* <div>
                                <label className='text-gray-700'> Check-In:</label>
                                <DatePicker
                                    className='border p-2 rounded-md'
                                    selected={startDate}
                                    onChange={date => setStartDate(date)}
                                />
                            </div> */}
                        </div>
                        <div className="text-sm opacity-50">
                            Check Out: {checkOut}
                            {/* Date Picker Input Field */}
                            {/* <div>
                                <label className='text-gray-700'>Check-out:</label>
                                <DatePicker
                                    className='border p-2 rounded-md'
                                    selected={endDate}
                                    onChange={date => setEndDate(date)}
                                />
                            </div> */}
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
                <button className="btn btn-sm">Share your thougts</button>
            </td>
            <th>

                <LuFolderSync className='text-2xl hover:text-3xl text-green-900' />

            </th>
            <th>

                <MdOutlineRemoveShoppingCart className='text-2xl hover:text-3xl text-red-900' onClick={() => handleDelete(_id)} />

            </th>
        </tr>
    )
}

export default MyBookingTable
