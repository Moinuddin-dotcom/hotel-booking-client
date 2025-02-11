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
        // console.log(data)
    }

    useEffect(() => {
        roomsData()
    }, []);
    return (
        <div className='text-center'>
            {/* <div className="divider bg-black"></div> */}
            <h1 className='text-4xl py-5 text-black lg:text-5xl font-bold' data-aos="fade-up" data-aos-once="false">Top Rated Rooms</h1>
            <div className='max-w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 my-5'>
                {
                    rooms.splice(0, 6).map(room =>
                        <div key={room._id} className="card bg-[#6bba5e0d] shadow-xl rounded-lg border border-gray-200 "
                            data-aos="fade-up" data-aos-once="false">
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
                                <h2 className="text-xl font-bold text-center relative"> <div>{room.package_name}</div> <div className="badge badge-secondary absolute -right-6 bottom-1 ">Top Rated</div></h2>

                                <p className="text-sm text-gray-500">{room.room_type}</p>
                                <div className="mt-2">
                                    <p>
                                        <span className="font-semibold">Check-In:</span> {room.checkIn}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Check-Out:</span> {room.checkOut}
                                    </p>
                                    <p>
                                        <span className="font-semibold ">
                                            Children: {room.adults} </span>
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
                                <div className="card-actions justify-center  mt-4">
                                    <Link
                                        to={`/roomsCard/${room._id}`}
                                        className="btn bg-[#f3f9f2] hover:bg-[#f3f9f2] border-2 border-[#98d2d1] hover:border-yellow-400 btn-sm"
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
