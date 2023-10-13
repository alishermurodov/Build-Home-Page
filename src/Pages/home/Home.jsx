import React from 'react'
import ButtonMain from '../../components/ButtonMain'
import sec2 from '../../assets/home/home1.png'
import home21 from '../../assets/home/home21.png'
import home22 from '../../assets/home/home22.png'
import home23 from '../../assets/home/home23.png'
import home24 from '../../assets/home/home24.png'
import h3Icon from '../../assets/home/home3icon.png'
import h41 from '../../assets/home/home41.png'
import h42 from '../../assets/home/home42.png'
import h43 from '../../assets/home/home43.png'
import h44 from '../../assets/home/home44.png'
import h45 from '../../assets/home/home45.png'
import h46 from '../../assets/home/home46.png'
import h47 from '../../assets/home/home47.png'
import h48 from '../../assets/home/home48.png'
import h49 from '../../assets/home/home49.png'
import h52 from '../../assets/home/home52.png'



const Home = () => {
  return (
    <div>
      <div className=" bg-gradient-to-r from-[#023957] to-[#056088]">
        <div className=" bg-[url(./assets/home/homeBg1.png)] bg-right bg-no-repeat text-[#fff]">
          <div className="w-[90%] md:w-[82%] mx-auto pt-[120px] md:pt-[180px] pb-[70px] md:pb-[160px]">
            <h1 className='text-[33px] md:text-[52px] md:w-[55%] font-bold mb-[16px]'>We build your dream house well and professionally</h1>
            <p className='md:w-[31%] mb-[32px]'>Our team can build a house according to your wishes. Any design and concept, we will help make it happen</p>
            <ButtonMain name={'Contact us'} />
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto dark:text-[#fff]">
        <div className="md:flex items-center flex-wrap justify-between py-[50px] md:py-[100px]">
          <img className='md:w-[50%]' src={sec2} alt="" />
          <div className="md:w-[28%]">
            <h3 className='text-[#056088] text-[24px] font-bold mb-[16px] dark:text-[#fff]'>Our company</h3>
            <p className='mb-[16px]'>Debuilds is a team of architects, interior design, and contractors who help our clients not only to build their dream building, but also to feel comfortable after the building is used.</p>
            <h5 className='font-medium mb-[16px]'>We already handled</h5>
            <h4 className='dark:text-[#fff] text-[#056088] text-[20px] font-bold mb-[32px]'>50+ Clients</h4>
            <ButtonMain name={'See more'} />
          </div>
        </div>
        <div className="dark:text-[#fff]">
          <h3 className='text-[#056088] text-[24px] text-center font-bold mb-[16px] dark:text-[#fff]'>Our company</h3>
          <p className='text-center'>Our services include building new buildings <br /> and renovating old buildings</p>
          <div className="flex flex-wrap justify-between py-[40px]">
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
        </div>
        <div className="">
          <h3 className='text-[#056088] text-[24px] text-center font-bold mb-[16px] dark:text-[#fff]'>Our benefits</h3>
          <p className='text-center mb-[30px]'>Here our benefits if you collaboration with <br /> our team</p>
          <div className="md:flex justify-between text-[#fff]">
            <div className="bg-[url(./assets/home/bgSmall.png)] py-[45px] px-[80px] md:w-[30%] mb-[30px]">
              <img className='mb-[35px] mx-auto' src={h3Icon} alt="" />
              <p className='text-[20px] font-bold mb-[16px] text-center'>Flexible time</p>
              <p className='text-cente'>We work wherever you ready to builds. Work fast and profesional</p>
            </div>
            <div className="bg-[url(./assets/home/bgSmall.png)] py-[45px] px-[80px] md:w-[30%] mb-[30px]">
              <img className='mb-[35px] mx-auto' src={h3Icon} alt="" />
              <p className='text-[20px] font-bold mb-[16px] text-center'>Flexible time</p>
              <p className='text-cente'>We work wherever you ready to builds. Work fast and profesional</p>
            </div>
            <div className="bg-[url(./assets/home/bgSmall.png)] py-[45px] px-[80px] md:w-[30%] mb-[30px]">
              <img className='mb-[35px] mx-auto' src={h3Icon} alt="" />
              <p className='text-[20px] font-bold mb-[16px] text-center'>Flexible time</p>
              <p className='text-cente'>We work wherever you ready to builds. Work fast and profesional</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url(./assets/home/bgBig.png)] bg-no-repeat bg-cover">
        <div className="w-[86%] mx-auto">
          <div className="mb-[100px]">
            <h3 className='text-[#fff] text-[24px] text-center font-bold mb-[16px]'>Our works</h3>
            <p className='text-center mb-[30px] text-[#fff]'>Here our some of the best the result when <br /> we build some buildings, houses, and also <br /> interior designs</p>
            <div className="md:flex justify-center flex-wrap gap-[20px] mb-[12px]">
              <div className="flex items-center gap-[20px] mb-[20px]">
                <div className="flex flex-col gap-[20px]">
                  <img src={h41} alt="" />
                  <img src={h42} alt="" />
                </div>
                <div className="">
                  <img src={h43} alt="" />
                </div>
              </div>
              <div className="flex flex-col gap-[20px]">
                <img src={h44} alt="" />
                <img src={h45} alt="" />
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[20px]">
                  <div className="">
                    <img src={h46} alt="" />
                  </div>
                  <div className="flex flex-col gap-[20px]">
                    <img src={h47} alt="" />
                    <img src={h48} alt="" />
                  </div>
                </div>
                <div className="">
                  <img src={h49} alt="" />
                </div>
              </div>
            </div>
            <div className="md:flex items-center justify-end gap-[20px]">
              <hr className='border-[#056088] border-[1px] mb-[13px] md:mb-0 md:w-[50%]' />
              <ButtonMain name={'See more'} />
            </div>
          </div>
          <div className="md:flex items-center justify-center">
            <div className="bg-[#fff] py-[50px] px-[25px] md:w-[25%]">
              <h3 className='text-[#056088] text-[24px] font-bold mb-[16px]'>What our clients say?</h3>
              <p className='mb-[32px]'>See what our clients say about their new home</p>
              <ButtonMain name={'See more'} />
            </div>
            <div className="bg-[url(./assets/home/home51.png)] bg-no-repeat bg-cover md:w-[68%] md:flex justify-end py-[40px] items-end ">
              <div className="bg-gradient-to-r from-[#023957] to-[#056088] p-[40px] text-[#fff]  md:w-[40%] ">
                <img className='w-[20%] mb-[10px]' src={h52} alt="" />
                <p className='mb-[16px]'>I really happy to see the result my new home. It’s really good house and good price too. And they work so fast becasue they have the best team. Once again, thankyou. I really appreciate it.</p>
                <p>- Mr. Roberto</p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="w-[90%] md:w-[86%] mx-auto py-[90px]">
        <div className="md:flex flex-wrap justify-between mb-[90px]">
          <h3 className='text-[#056088] text-center md:text-start text-[24px] font-bold mb-[16px] dark:text-[#fff]'>Our Partners</h3>
          <h3 className='text-[#056088] text-center md:text-start text-[24px] font-bold mb-[16px] dark:text-[#fff]'>Our Partners</h3>
          <h3 className='text-[#056088] text-center md:text-start text-[24px] font-bold mb-[16px] dark:text-[#fff]'>Our Partners</h3>
          <h3 className='text-[#056088] text-center md:text-start text-[24px] font-bold mb-[16px] dark:text-[#fff]'>Our Partners</h3>
          <h3 className='text-[#056088] text-center md:text-start text-[24px] font-bold mb-[16px] dark:text-[#fff]'>Our Partners</h3>
        </div>
        <div className="bg-[url(./assets/home/home6Video.png)] bg-no-repeat bg-cover md:w-[90%] flex items-end justify-end h-[90vh] mx-auto mb-[60px]">
        </div>
        <div className="bg-[url(./assets/home/home7BG.png)] bg-no-repeat bg-cover py-[50px] text-[#fff]">
          <h1 className='text-[33px] md:text-[52px]  font-bold mb-[16px] text-center'>Want to get our offer <br /> updates and news?</h1>
          <p className=' mb-[32px] text-center'>Submit your e-mail and we will give you update about <br /> information and discount. Every single week. (not spamming)</p>
          <div className="flex items-center flex-wrap justify-center">
            <input type="email" placeholder='Enter your e-mail here' className='h-[65px] md:w-[45%] pl-[30px]'/>
            <ButtonMain name={'Submit'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home