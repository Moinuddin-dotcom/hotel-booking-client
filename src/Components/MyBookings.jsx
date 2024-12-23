import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth'
import MyBookingTable from '../Pages/MyBookingTable'

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





    return (
        <div>
            <h1 className='text-4xl'>MyBookings(Private router)</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL </th>
                            <th>Hotel Details</th>
                            <th>My Profile</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            loginUserBookingRoom.map(table => <MyBookingTable key={table._id} table={table} />)
                        }

                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default MyBookings
