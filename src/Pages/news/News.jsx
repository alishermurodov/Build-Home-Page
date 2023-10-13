import React from 'react'
import new1 from '../../assets/news/new1.png'
import new2 from '../../assets/news/new2.png'
import new3 from '../../assets/news/new3.png'
import new4 from '../../assets/news/new4.png'
import NewsCard from '../../components/NewsCard'

const News = () => {
  return (
    <div>
      <div className=" bg-[url(./assets/home/homeBg1.png)] bg-no-repeat bg-cover  text-[#fff]">
        <div className="w-[90%] md:w-[86%] mx-auto pt-[120px] md:pt-[180px] pb-[70px] md:pb-[100px]">
          <h1 className='text-[33px] md:text-[52px] text-center font-bold mb-[16px]'>Process details : Build villa two floors</h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto">
        <div className="py-[50px] md:py-[100px]">
          <img src={new1} alt="" />
        </div>
        <div className="md:flex justify-between items-center flex-wrap">
          <NewsCard img={new2}/>
          <NewsCard img={new3}/>
          <NewsCard img={new4}/>
        </div>
      <h3 className='text-[#056088] text-center dark:text-[#fff] text-[20px] mb-[46px] font-bold'>See more</h3>

      </div>
    </div>
  )
}

export default News