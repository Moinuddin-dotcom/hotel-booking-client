import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import slidPic1 from '../assets/images/coursel-1.webp'
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
                        image={slidPic1}
                        text="Best Room in town" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic1}
                        text="Best Room in town" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic1}
                        text="Best Room in town" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic1}
                        text="Best Room in town" />
                </SwiperSlide>
                <SwiperSlide>
                    <SlideOfSlider
                        image={slidPic1}
                        text="Best Room in town" />
                </SwiperSlide>
                {/* <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide> */}
            </Swiper>
        </div>
    )
}

export default Slider
