import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { LuFolderSync } from 'react-icons/lu'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'

const MyBookingTable = ({ table }) => {
    // const {roomType} = table 
    const { rommImage, roomType, checkIn, checkOut, price, userName, userEmail } = table

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
                        <div className="text-sm opacity-50">Check In: {checkIn}</div>
                        <div className="text-sm opacity-50">Check Out: {checkOut}</div>
                    </div>
                </div>
            </td>
            <td>

                {userName}
                <br />
                <span className="badge badge-ghost badge-sm"> {userEmail}</span>
            </td>
            <td>BDT:{price}/-</td>
            <th>

                <LuFolderSync className='text-2xl hover:text-3xl text-green-900' />

            </th>
            <th>

                <MdOutlineRemoveShoppingCart className='text-2xl hover:text-3xl text-red-900' />

            </th>
        </tr>
    )
}

export default MyBookingTable
