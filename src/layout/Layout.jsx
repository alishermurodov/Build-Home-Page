import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import logo from '../assets/DB-.png'
import ButtonMain from '../components/ButtonMain'
import Switcher from '../components/Switcher'
import Burger from '../components/Burger'




const Layout = () => {
    const { pathname } = useLocation()
    return (
        <div className='dark:bg-[#000]'>
            <div className="w-[100%] glassy fixed top-0 left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-[85%] mx-auto flex justify-between h-[60px] md:h-[80px] items-center">
                    <img src={logo} alt="" />
                    <div className="lg:flex items-center gap-[40px] font-medium hidden">
                        <Link to="/">
                            <p style={{ color: pathname == "/" ? "red" : "#fff" }}>Home</p>
                        </Link>
                        <Link to="/about">
                            <p style={{ color: pathname == "/about" ? "red" : "#fff" }}>About</p>
                        </Link>
                        <Link to="/contact">
                            <p style={{ color: pathname == "/contact" ? "red" : "#fff" }}>Contact</p>
                        </Link>
                        <Link to="/gallery">
                            <p style={{ color: pathname == "/gallery" ? "red" : "#fff" }}>Gallery</p>
                        </Link>
                        <Link to="/services">
                            <p style={{ color: pathname == "/services" ? "red" : "#fff" }}>Services</p>
                        </Link>
                        <Link to="/story">
                            <p style={{ color: pathname == "/story" ? "red" : "#fff" }}>Story</p>
                        </Link>
                        <Link to="/process">
                            <p style={{ color: pathname == "/process" ? "red" : "#fff" }}>Process</p>
                        </Link>
                        <Link to="/careers">
                            <p style={{ color: pathname == "/careers" ? "red" : "#fff" }}>Careers</p>
                        </Link>
                        <Link to="/news">
                            <p style={{ color: pathname == "/news" ? "red" : "#fff" }}>News</p>
                        </Link>
                        <div className="">
                            <Switcher />
                        </div>
                    </div>
                    <div className="lg:hidden">
                        <Burger/>
                    </div>
                </div>
            </div>
            <Outlet />
            <div className="bg-[#023957] py-[60px]">
                <div className="w-[90%] md:w-[80%] mx-auto text-[#fff] flex flex-wrap justify-between gap-[30px]">
                    <div className="mb-[32px]">
                        <img className='mb-[16px]' src={logo} alt="" />
                        <p className='mb-[32px] text-[#fff]'>Lizenzo street number 12 <br />
                            Jakarta, Indonesia
                        </p>
                        <ButtonMain name={'Get directions'} />
                    </div>
                    <div className="mb-[32px]">
                        <h3 className='text-[24px] font-medium'>Menu</h3>
                        <p className='mb-[16px]'>Home</p>
                        <p className='mb-[16px]'>About</p>
                        <p className='mb-[16px]'>Gallery</p>
                        <p className=''>Service</p>
                    </div>
                    <div className="mb-[32px]">
                        <h3 className='text-[24px] font-medium'>Menu</h3>
                        <p className='mb-[16px]'>Home</p>
                        <p className='mb-[16px]'>About</p>
                        <p className='mb-[16px]'>Gallery</p>
                        <p className=''>Service</p>
                    </div>
                    <div className="mb-[32px]">
                        <h3 className='text-[24px] font-medium'>Menu</h3>
                        <p className='mb-[16px]'>Home</p>
                        <p className='mb-[16px]'>About</p>
                        <p className='mb-[16px]'>Gallery</p>
                        <p className=''>Service</p>
                    </div>
                    <div className="mb-[32px]">
                        <h3 className='text-[24px] font-medium'>Menu</h3>
                        <p className='mb-[16px]'>Home</p>
                        <p className='mb-[16px]'>About</p>
                        <p className='mb-[16px]'>Gallery</p>
                        <p className=''>Service</p>
                    </div>

                </div>
            </div>
            <p className='py-[30px] text-center dark:text-[#fff]'>2021 - Copyright ZHB Studio</p>
        </div>
    )
}

export default Layout