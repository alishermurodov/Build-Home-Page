import React from 'react'
import ButtonMain from './ButtonMain'

const CarerCard = () => {
    return (
        <div className='p-[30px] bg-[#fff] md:w-[30%] mb-[40px] md:mb-[100px]' style={{boxShadow: '0px 8px 30px 0px grey'}}>
            <h3 className='text-[#056088] dark:text-[#fff] text-[20px] mb-[16px] font-bold'>Budget : $90.000</h3>
            <p className='mb-[6px]'>5+ years experience</p>
            <p className='mb-[6px]'>Full-time</p>
            <p className='mb-[32px]'>$9000/month</p>
            <ButtonMain name={'Details'} />
        </div>
    )
}

export default CarerCard