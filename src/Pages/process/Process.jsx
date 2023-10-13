import React from 'react'
import p1 from '../../assets/process/pros1.png'
import pVideo from '../../assets/process/prosVideo.png'
import SwiperST from '../../components/storyComp/SwiperStor2'

const Process = () => {
  return (
    <div>
      <div className=" bg-[url(./assets/home/homeBg1.png)] bg-no-repeat bg-cover  text-[#fff]">
        <div className="w-[90%] md:w-[86%] mx-auto pt-[120px] md:pt-[180px] pb-[70px] md:pb-[100px]">
          <h1 className='text-[33px] md:text-[52px] text-center font-bold mb-[16px]'>Process details : Build villa two floors</h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto">
        <div className="md:flex items-center justify-between py-[50px] md:py-[100px]">
          <div className="mb-[20px] md:mb-0">
            <h3 className='text-[#056088] dark:text-[#fff] text-[20px] mb-[16px] font-bold'>Villa De Borusdz</h3>
            <p className='dark:text-[#fff] mb-[16px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <h3 className='text-[#056088] dark:text-[#fff] text-[20px] mb-[16px] font-bold'>Budget : $90.000</h3>
          </div>
          <img className='md:w-[55%]' src={p1} alt="" />
        </div>
        <img className='mb-[100px]' src={pVideo} alt="" />
        <h3 className='text-[#056088] text-center dark:text-[#fff] text-[20px] mb-[32px] font-bold'>Gallery</h3>
        <div className="mb-[100px]">
          <SwiperST/>
        </div>

      </div>
    </div>
  )
}

export default Process