import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth'
import MyBookingTable from '../Pages/MyBookingTable'
import Swal from 'sweetalert2'

const MyBookings = () => {
    const { user } = useAuth()
    const [loginUserBookingRoom, setLoginUserBookingRoom] = useState([])
    const fetchBookingRoom = async () => {
        const res = await fetch(`http://localhost:8001/bookedHotel/${user?.email}`)
        const data = await res.json()
        console.log(data)
        setLoginUserBookingRoom(data)

    }

    useEffect(() => {
        fetchBookingRoom()
    }, [])

    const handleDelete = async (id) => {
        console.log("Lets delete card", id)
        // const res = await fetch(`http://localhost:8001/bookedHotel/${id}`, {
        //     method: 'DELETE',
        // })
        // const data = await res.json()
        // console.log("Delete is done", data)
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


                const res = await fetch(`http://localhost:8001/bookedHotel/${id}`, {
                    method: 'DELETE',
                })
                const data = await res.json()
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
            <h1 className='text-4xl'>MyBookings(Private router)</h1>
            <div className="max-w-[90vw] mx-auto overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL </th>
                            <th>Hotel Details</th>
                            <th>My Profile</th>
                            <th>Price</th>
                            <th>Review <span className='font-semibold text-red-900'>(Pending)</span> </th>
                            <th>Update</th>
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
                                />)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default MyBookings
