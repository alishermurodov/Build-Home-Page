import React from 'react'
import a1 from '../../assets/about/about1.png'
import a2 from '../../assets/about/about2.png'

const About = () => {
  return (
    <div>
      <div className=" bg-[url(./assets/home/homeBg1.png)] bg-no-repeat bg-cover  text-[#fff]">
        <div className="w-[90%] md:w-[86%] mx-auto pt-[120px] md:pt-[180px] pb-[70px] md:pb-[100px]">
          <h1 className='text-[33px] md:text-[52px] text-center font-bold mb-[16px]'>About our story - We are <br /> the best team</h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto py-[70px] md:py-[100px] md:flex items-center justify-between dark:text-[#fff]">
        <img className='mb-[20px] md:mb-0' src={a1} alt="" />
        <div className="md:w-[40%]">
          <h3 className='text-[#056088] text-[24px]  font-bold mb-[16px] dark:text-[#fff]'>Here were the story begins</h3>
          <p className='mb-[32px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        </div>
      </div>
      <div className="bg-[url(./assets/home/bgBig.png)] bg-no-repeat bg-cover mb-[80px]">
        <div className="w-[90%] md:w-[86%] mx-auto py-[70px] md:py-[100px] md:flex items-center justify-between text-[#fff]">
          <div className="md:w-[40%]">
            <h3 className='text-[24px]  font-bold mb-[16px] text-[#fff]'>Here were the story begins</h3>
            <p className='mb-[32px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
          <img className='mb-[20px] md:mb-0' src={a1} alt="" />
        </div>
      </div>
    </div>
  )
}

export default About