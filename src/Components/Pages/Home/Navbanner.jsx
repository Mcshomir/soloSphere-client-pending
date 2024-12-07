import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import SliderBanner from './SliderBanner';

export default function Navbanner() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
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
                    <SliderBanner></SliderBanner>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderBanner></SliderBanner>
                </SwiperSlide>
                <SwiperSlide>
                    <SliderBanner></SliderBanner>
                </SwiperSlide>


            </Swiper>
        </>
    );
}