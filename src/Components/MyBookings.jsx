import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth'
import MyBookingTable from '../Pages/MyBookingTable'
import Swal from 'sweetalert2'
import { Helmet } from 'react-helmet'
import axios from 'axios'

const MyBookings = () => {
    const { user } = useAuth()
    const [loginUserBookingRoom, setLoginUserBookingRoom] = useState([])
    const fetchBookingRoom = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/bookedHotel/${user?.email}`, { withCredentials: true });
        console.log(data)
        setLoginUserBookingRoom(data)

    }

    useEffect(() => {
        fetchBookingRoom()
    }, [])

    const handleDelete = async (id) => {
        console.log("Lets delete card", id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/bookedHotel/${id}`)
                console.log("Delete is done", data)
                if (data.deletedCount > 0) {
                    const remaining = loginUserBookingRoom.filter(remain => remain._id !== id)
                    setLoginUserBookingRoom(remaining)
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });

                }

            }
        })
    }





    return (
        <div>
            <Helmet>
                <title>My Bookings | The Peninsula</title>
            </Helmet>
            <div className="max-w-[90vw] mx-auto mb-10 overflow-x-auto text-black pb-20 border-2 border-[#98d2d1] rounded-lg bg-[#6bba5e0d]">
                <h1 className='text-center font-semibold text-5xl pt-5 pb-10'>My Bookings</h1>
                <table className="table">
                    {/* head */}
                    <thead className='text-black border-b-2 border-[#98d2d1]'>
                        <tr>
                            <th>SL </th>
                            <th>Hotel Details</th>
                            <th>My Profile</th>
                            <th>Price</th>
                            <th>Review </th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            loginUserBookingRoom.map(table =>
                                <MyBookingTable key={table._id}
                                    table={table}
                                    handleDelete={handleDelete}
                                    cardId={table._id}
                                />)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default MyBookings
