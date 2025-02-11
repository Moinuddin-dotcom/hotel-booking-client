
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from 'axios';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import Box from '@mui/material/Box';
import { Helmet } from 'react-helmet';
import galleryBg from '../../assets/images/gallery-bg.jpg'
import { Link } from 'react-router-dom';
import Loading from '../../Pages/Loading';

const Gallery = () => {
    const [rooms, setRooms] = useState([])
    const [loading, setLoading] = useState(true)



    const roomsData = async () => {
        setLoading(true)
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`)
            setRooms(data)
            // console.log(data)
        } catch (error) {
            toast.error('Data cant load at this moment', error)
        } finally {
            setLoading(false)
        }
    }



    useEffect(() => {
        roomsData()
    }, []);
    return (
        <>
            <Helmet>
                <title>GALLERY | The Peninsula</title>
            </Helmet>
            <div
                className="hero my-10"
                style={{
                    backgroundImage: `url(${galleryBg})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="py-10">
                        <h1 className="mb-5 text-2xl md:lg:text-4xl lg:text-5xl font-bold">Rooms & Suites Gallery</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link to={'/rooms'}><button className="btn btn-wide border-2 border-[#98d2d1] hover:border-yellow-400 bg-white hover:bg-black text-black hover:text-white">Visite our rooms</button></Link>
                    </div>
                </div>
            </div>
            {loading ? <Loading /> : <>
                <div className='max-w-[95vw] mx-auto hidden md:grid grid-cols-1 xl:grid-cols-2 '>
                    <div className='justify-self-center '>
                        <ImageList sx={{ width: 700, height: 500 }} variant="woven" cols={3} gap={8}>
                            {rooms.slice(0, 10).map((item) => (
                                <ImageListItem key={item._id}>
                                    <img
                                        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                        src={`${item.image}?w=161&fit=crop&auto=format`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </div>
                    <div className='justify-self-center'>
                        <Box sx={{ width: 700, height: 500, overflowY: 'scroll' }}>
                            <ImageList variant="masonry" cols={3} gap={8}>
                                {rooms.slice(10, 20).map((item) => (
                                    <ImageListItem key={item.img}>
                                        <img
                                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                            src={`${item.image}?w=248&fit=crop&auto=format`}
                                            alt={item.title}
                                            loading="lazy"
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </Box>
                    </div>
                </div>
                <div>
                    {rooms.map(roomImg =>
                        <div className='mb-4 mx-2 flex flex-col justify-center items-center md:hidden'>

                            <img src={roomImg.image} className='rounded-xl w-96 ' alt="" />
                        </div>
                    )}
                </div>
            </>
            }
        </>
    )
}

export default Gallery
