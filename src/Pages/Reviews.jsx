import axios from 'axios'
import React, { useEffect, useState } from 'react'

// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ReviewCardHome from './ReviewCardHome';



const Reviews = () => {
    const [reviews, setReviews] = useState([])


    const reviewsData = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/reviews`)
        setReviews(data)
        console.log(data)
    }

    useEffect(() => {
        reviewsData()
    }, []);


    return (
        <div className=' md:max-w-[60vw] mx-auto my-20'>
            <h1 className='text-center font-semibold text-5xl my-10'>Users reviews</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {reviews.map(reviewData =>
                    <SwiperSlide key={reviewData._id} >
                        <ReviewCardHome reviews={reviewData} />
                    </SwiperSlide>)}

            </Swiper>
        </div>
    )
}

export default Reviews
