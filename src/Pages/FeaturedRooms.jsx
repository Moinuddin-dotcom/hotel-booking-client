import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const FeaturedRooms = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])
    const [rooms, setRooms] = useState([])


    const roomsData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`)
        setRooms(data)
        console.log(data)
    }

    useEffect(() => {
        roomsData()
    }, []);
    return (
        <div className='text-center'>
            <div className="divider bg-white"></div>
            <h1 className='text-4xl underline py-5 text-white font-bold' data-aos="fade-up" data-aos-once="false">Top Rated Rooms</h1>
            <div className='max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-5'>
                {
                    rooms.splice(0, 6).map(room =>
                        <div key={room._id} className="card bg-base-100 shadow-xl rounded-lg border border-gray-200 " data-aos="fade-up-right" data-aos-once="false">
                            <figure className="relative">
                                <img
                                    src={room.image}
                                    alt={room.package_name}
                                    className="w-full h-48 object-cover rounded-t-lg"
                                />
                                {room.roomsLeft <= 5 && (
                                    <span className="badge badge-error absolute top-4 right-4">
                                        Only {room.roomsLeft} Left!
                                    </span>
                                )}
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">{room.package_name} <div className="badge badge-secondary">Top Rated</div></h2>

                                <p className="text-sm text-gray-500">{room.room_type}</p>
                                <div className="mt-2">
                                    <p>
                                        <span className="font-semibold">Check-In:</span> {room.checkIn}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Check-Out:</span> {room.checkOut}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Adults:</span> {room.adults}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Rooms:</span> {room.rooms}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <p>
                                        <span className="font-semibold">Original Price:</span>{" "}
                                        <span className="line-through text-red-500">
                                            {room.originalPrice} {room.currency}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="font-semibold">Discounted Price:</span>{" "}
                                        <span className="text-green-500 font-bold">
                                            {room.discountedPrice} {room.currency}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="font-semibold">Total Package Price:</span>{" "}
                                        <span>
                                            {room.package_price} {room.package_currency}
                                        </span>
                                    </p>
                                    <p>
                                        <span className="font-semibold">Total Price:</span>{" "}
                                        <span className="text-blue-500 font-bold">
                                            {room.totalPrice} {room.currency}
                                        </span>
                                    </p>
                                </div>
                                <div className="card-actions justify-end mt-4">
                                    <Link
                                        to={`/roomsCard/${room._id}`}
                                        className="btn btn-primary btn-sm"
                                    >
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default FeaturedRooms
