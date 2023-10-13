import React from 'react'
import service1 from '../../assets/contact/service1.png'

import ButtonMain from '../../components/ButtonMain'

const Contact = () => {
  return (
    <div>
      <div className=" bg-[url(./assets/home/homeBg1.png)] bg-no-repeat bg-cover  text-[#fff]">
        <div className="w-[90%] md:w-[86%] mx-auto pt-[120px] md:pt-[180px] pb-[70px] md:pb-[100px]">
          <h1 className='text-[33px] md:text-[52px] text-center font-bold mb-[16px]'>About our story - We are <br /> the best team</h1>
        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto py-[70px] md:py-[100px] md:flex items-center justify-between dark:text-[#fff]">
        <img className='mb-[20px] md:mb-0' src={service1} alt="" />
        <div className="md:w-[60%] bg-[#F5F5F5] p-[16px] md:p-[40px]">
          <h3 className='text-[#056088] text-[24px]  font-bold mb-[24px] dark:text-[#fff]'>Here were the story begins</h3>
          <div className="mb-[20px] flex gap-[20px]">
            <input className='w-[45%] h-[50px] pl-[20px]' placeholder='Your name/company name' type="text" />
            <input className='w-[45%] h-[50px] pl-[20px]' placeholder='Phone/E-mail' type="text" />
          </div>
          <input type="text" className='w-[93%] h-[150px] pl-[20px] mb-[20px]' />
          <ButtonMain name={'Submit'} />
        </div>
      </div>
        <div className="w-[90%] mx-auto mb-[100px]">
          <h3 className='text-[#056088] text-[24px] text-center font-bold mb-[24px] dark:text-[#fff]'>Or contact us via e-mails or even mobile call or Whatsapp messages</h3>
          <div className="flex justify-center flex-wrap gap-[32px]">
            <ButtonMain name={'E-mails'}/>
            <ButtonMain name={'Whatsapp'}/>
            <ButtonMain name={'Message'}/>
          </div>
        </div>
    </div>
  )
}

export default Contact