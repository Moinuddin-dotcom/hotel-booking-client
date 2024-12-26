import React, { useEffect, useState } from 'react'
import RoomsCard from './RoomsCard'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import toast from 'react-hot-toast'
import Loading from '../Pages/Loading'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    const [sort, setSort] = useState('')
    const [loading, setLoading] = useState(true)

     useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true,
        });
      }, [])

    const roomsData = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms?sort=${sort}`)
            setRooms(data)
            console.log(data)
        } catch (error) {
            toast.error('Data cant load at this moment', error)
        }finally{
            setLoading(false)
        }
    }



    useEffect(() => {
        roomsData()
    }, [sort]);




    return (
        <div>
            <Helmet>
                <title>All Rooms | The Peninsula</title>
            </Helmet>
            {
                loading ?
                    <Loading />
                    :
                    <>
                        <h1 className='text-center font-bold text-white text-4xl py-4'>See all available rooms: {rooms.length} </h1>
                        <div className='text-center'>
                            <select
                                onChange={e => setSort(e.target.value)}
                                value={sort}
                                name='category'
                                id='category'
                                className='border p-4 rounded-md'
                            >
                                <option value=''>Sort By Price</option>
                                <option value='dsc'>Descending Order</option>
                                <option value='asc'>Ascending Order</option>
                            </select>
                        </div>

                        <main className='max-w-[80vw] lg:max-w-[95vw] xl:max-w-[80vw] mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 py-5' data-aos="fade-up-right" data-aos-once="false">
                            {
                                rooms.map(room =>
                                    <Link to={`/roomsCard/${room._id}`} key={room._id} className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border" >
                                        <img className='w-96 h-60' src={room.image} alt="" />
                                        <div className='bg-gray-300'>
                                            <p className='p-2'>Price: {room.totalPrice} {room.currency} </p>
                                        </div>
                                    </Link>
                                )
                            }

                        </main>
                    </>
            }
        </div>
    )
}

export default Rooms
