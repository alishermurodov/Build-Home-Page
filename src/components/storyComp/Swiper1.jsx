import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import h52 from '../../assets/home/home52.png'


export default function SwiperStor() {
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
                    <div className="bg-gradient-to-r from-[#023957] to-[#056088] p-[40px] text-[#fff]   mb-[20px] md:mb-0">
                        <img className='w-[90%] md:w-[30%] lg:w-[20%] mb-[10px]' src={h52} alt="" />
                        <p className='mb-[16px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
                        <p>- Mr. Roberto</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hidden md:block bg-gradient-to-r from-[#023957] to-[#056088] p-[40px] text-[#fff]   mb-[20px] md:mb-0">
                        <img className='w-[90%] md:w-[30%] lg:w-[20%] mb-[10px]' src={h52} alt="" />
                        <p className='mb-[16px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
                        <p>- Mr. Roberto</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hidden md:block bg-gradient-to-r from-[#023957] to-[#056088] p-[40px] text-[#fff]   mb-[20px] md:mb-0">
                        <img className='w-[90%] md:w-[30%] lg:w-[20%] mb-[10px]' src={h52} alt="" />
                        <p className='mb-[16px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
                        <p>- Mr. Roberto</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hidden md:block bg-gradient-to-r from-[#023957] to-[#056088] p-[40px] text-[#fff]   mb-[20px] md:mb-0">
                        <img className='w-[90%] md:w-[30%] lg:w-[20%] mb-[10px]' src={h52} alt="" />
                        <p className='mb-[16px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
                        <p>- Mr. Roberto</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hidden md:block bg-gradient-to-r from-[#023957] to-[#056088] p-[40px] text-[#fff]   mb-[20px] md:mb-0">
                        <img className='w-[90%] md:w-[30%] lg:w-[20%] mb-[10px]' src={h52} alt="" />
                        <p className='mb-[16px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
                        <p>- Mr. Roberto</p>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </>
    );
}






