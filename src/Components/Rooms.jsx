import React, { useEffect, useState } from 'react'
import RoomsCard from './RoomsCard'
import { Link } from 'react-router-dom'

const Rooms = () => {
    const [rooms, setRooms] = useState([])

    const roomsData = async () => {
        const response = await fetch('http://localhost:8001/rooms')
        const data = await response.json()
        setRooms(data)
        // console.log(data)
    }

    useEffect(() => {
        roomsData()

    }, []);
    return (
        <div>
            <h1>All Roomes: {rooms.length} </h1>

            <main className='max-w-[80vw] lg:max-w-[95vw] xl:max-w-[80vw] mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {/* {
                    rooms.map(room => <RoomsCard key={room._id} room={room} />)
                } */}
                {
                    rooms.map(room =>
                        <Link to={`/roomsCard/${room._id}`} key={room._id} className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border" >
                            <img src={room.image} alt="" />
                        </Link>
                    )
                }
            </main>

        </div>
    )
}

export default Rooms
