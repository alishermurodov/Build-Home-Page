import React from 'react'
import CarerCard from '../../components/CarerCard'

const Careers = () => {
  return (
    <div>
      <div className=" bg-[url(./assets/home/homeBg1.png)] bg-no-repeat bg-cover  text-[#fff]">
        <div className="w-[90%] md:w-[86%] mx-auto pt-[120px] md:pt-[180px] pb-[70px] md:pb-[100px]">
          <h1 className='text-[33px] md:text-[52px] text-center font-bold mb-[16px]'>Process details : Build villa two floors</h1>
        </div>
      </div>
      <div className="md:flex flex-wrap justify-between items-center py-[50px] md:py-[100px] w-[90%] md:w-[86%] mx-auto">
        <CarerCard/>
        <CarerCard/>
        <CarerCard/>
        <CarerCard/>
        <CarerCard/>
        <CarerCard/>
        <CarerCard/>
        <CarerCard/>
        <CarerCard/>
      </div>
      <h3 className='text-[#056088] text-center dark:text-[#fff] text-[20px] mb-[46px] font-bold'>See more</h3>

    </div>
  )
}

export default Careers