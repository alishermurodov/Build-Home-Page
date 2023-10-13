import React from 'react'
import h52 from '../../assets/home/home52.png'
import SwiperStor from '../../components/storyComp/Swiper1'
import SwiperST from '../../components/storyComp/SwiperStor2'
// import Swiper2 from '../../components/storyComp/SwiperStor2'



const Story = () => {
  return (
    <div>
      <div className=" bg-[url(./assets/home/homeBg1.png)] bg-no-repeat bg-cover  text-[#fff]">
        <div className="w-[90%] md:w-[86%] mx-auto pt-[120px] md:pt-[180px] pb-[70px] md:pb-[100px]">
          <h1 className='text-[33px] md:text-[52px] text-center font-bold mb-[16px]'>Read some story from clients!</h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto py-[50px] md:py-[100px]">
        <SwiperStor />
      </div>
      <div className="bg-[url(./assets/home/home7BG.png)] bg-no-repeat bg-cover p-[20px] md:p-0 text-[#fff] mb-[130px]">
        <div className="md:w-[70%] mx-auto  md:flex justify-center items-center p-[50px]">
          <div className="md:w-[50%]">
            <img className='w-[50%] mb-[10px]' src={h52} alt="" />
          </div>
          <div className="md:w-[50%]">
            <p>Mr. James’s says : “I’m so happy!”</p>
            <p className='mb-[16px]'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto mb-[100px]">
        <SwiperST/>
      </div>
    </div>
  )
}

export default Story