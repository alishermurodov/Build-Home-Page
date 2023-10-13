import React from 'react'

import ButtonMain from '../../components/ButtonMain'
import home21 from '../../assets/home/home21.png'
import home22 from '../../assets/home/home22.png'
import home23 from '../../assets/home/home23.png'
import home24 from '../../assets/home/home24.png'
import ser1 from '../../assets/service/ser1.png'
import ser2 from '../../assets/service/ser2.png'



const Services = () => {
  return (
    <div>
      <div className=" bg-[url(./assets/home/homeBg1.png)] bg-no-repeat bg-cover  text-[#fff]">
        <div className="w-[90%] md:w-[86%] mx-auto pt-[120px] md:pt-[180px] pb-[70px] md:pb-[100px]">
          <h1 className='text-[33px] md:text-[52px] text-center font-bold mb-[16px]'>Our team services</h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto">
        <div className="flex flex-wrap justify-between py-[40px] md:py-[100px] dark:text-[#fff]">
          <div className="py-[20px] px-[30px] md:w-[21%]">
            <img className='dark:hidden mb-[16px]' src={home22} alt="" />
            <img className='mb-[16px] hidden dark:block' src={home21} alt="" />
            <p className='text-[20px] font-bold mb-[16px]'>Interior Design</p>
            <p>We have an interior designer for design your perfect inside house</p>
          </div>
          <div className="py-[20px] px-[30px] md:w-[21%]">
            <img className='dark:hidden mb-[16px]' src={home23} alt="" />
            <img className='mb-[16px] hidden dark:block' src={home21} alt="" />
            <p className='text-[20px] font-bold mb-[16px]'>Interior Design</p>
            <p>We have an interior designer for design your perfect inside house</p>
          </div>
          <div className="py-[20px] px-[30px] md:w-[21%]">
            <img className='dark:hidden mb-[16px]' src={home24} alt="" />
            <img className='mb-[16px] hidden dark:block' src={home21} alt="" />
            <p className='text-[20px] font-bold mb-[16px]'>Interior Design</p>
            <p>We have an interior designer for design your perfect inside house</p>
          </div>
          <div className="py-[20px] px-[30px] md:w-[21%]">
            <img className='dark:hidden mb-[16px]' src={home23} alt="" />
            <img className='mb-[16px] hidden dark:block' src={home21} alt="" />
            <p className='text-[20px] font-bold mb-[16px]'>Interior Design</p>
            <p>We have an interior designer for design your perfect inside house</p>
          </div>
        </div>
        <div className="bg-[url(./assets/home/home7BG.png)] bg-no-repeat bg-cover  text-[#fff] p-[20px] md:p-0 md:flex justify-between mb-[50px] md:mb-[100px] items-center">
          <img className='mb-[20px] md:mb-0' src={ser1} alt="" />
          <div className="md:w-[40%] md:pr-[30px]">
            <h2 className='text-[24px] font-bold mb-[16px]'>Design building / house</h2>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
        <div className="bg-[url(./assets/home/home7BG.png)] bg-no-repeat bg-cover p-[20px] md:p-0 text-[#fff] md:flex justify-between items-center mb-[50px] md:mb-[100px]">
          <div className="md:w-[40%] md:pr-[30px] md:pl-[30px]">
            <h2 className='text-[24px] font-bold mb-[16px]'>Design building / house</h2>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <img className='mb-[20px] md:mb-0' src={ser2} alt="" />
        </div>
      </div>


    </div>

  )
}

export default Services