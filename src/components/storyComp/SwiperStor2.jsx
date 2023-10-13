import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// img
import st1 from '../../assets/story/stor1.png'
import st2 from '../../assets/story/stor2.png'
import st3 from '../../assets/story/stor3.png'


export default function SwiperST() {
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper md:flex flex-wrap justify-between"
            >
                <SwiperSlide>
                    <div className="mb-[20px] md:mb-0">
                        <img src={st1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-[20px] md:mb-0 hidden md:block">
                        <img src={st2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-[20px] md:mb-0 hidden md:block">
                        <img src={st3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-[20px] md:mb-0 hidden md:block">
                        <img src={st2} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="mb-[20px] md:mb-0 hidden md:block">
                        <img src={st3} alt="" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}






