import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slidPic1 from '../assets/images/coursel-1.jpg'
import slidPic2 from '../assets/images/coursel-2.webp'
import slidPic3 from '../assets/images/coursel-3.webp'
import slidPic4 from '../assets/images/coursel-4.jpg'
import slidPic5 from '../assets/images/coursel-5.jpg'
import slidPic6 from '../assets/images/coursel-6.webp'
import SlideOfSlider from './SlideOfSlider';

const Slider = () => {
    return (
        <div>
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
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic1}
                        text="Best Room in town" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic2}
                        text="Always expecting the best room" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic3}
                        text="Expecting requests to be guaranteed" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic4}
                        text="Using incorrect arrival and departure dates" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic5}
                        text="Not using a credit card" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic6}
                        text="Making reservations for the wrong hotel" />
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default Slider
