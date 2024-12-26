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
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/bookedHotel/${user?.email}`)
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
            <div className="max-w-[90vw] mx-auto overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL </th>
                            <th>Hotel Details</th>
                            <th>My Profile</th>
                            <th>Price</th>
                            <th>Review </th>
                            {/* <th>Update</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
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
