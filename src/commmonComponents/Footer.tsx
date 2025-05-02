import React from 'react'
import logo from "../../public/assets/logo.png"
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
    return (
        <footer className='w-screen  bg-[#630404] p-4 mt-16 pb-16'>

            <div className='flex flex-col  justify-center items-center '>

                <h1 className='lg:w-[500px] text-xl mt-36 text-white text-center 2xl:w-[674px] lg:text-3xl xl:text-4xl 2xl:text-[50px]'>
                    The only Ed-Tech company that can support your business at any scale
                </h1>

                <div className="flex items-start mt-7">
                    <button className="button bg-[#FFF]  rounded-full text-black font-medium py-2 px-4  hover:bg-[#F06A6A] duration-500 hover:text-black">Get Started</button>
                </div>

            </div>

            <div className='flex flex-col lg:flex-row gap-y-12 lg:gap-10 mt-8'>
                <div className='text-white flex flex-col gap-y-5 flex-1/2'>

                    <div>
                        <Image src={logo} alt={'logo'} />
                    </div>
                    <div>
                        <a href="tel:+1234567890" className='font-medium text-[18px]'>1234567890</a>

                    </div>
                    <div>
                        <a href="mailto:ask@timetechnologiesllc.com" className='font-medium text-[18px]'>ask@timetechnologiesllc.com</a>
                    </div>

                    <div>
                        <p className='font-medium text-[18px]'>675 North Hunt Club Blvd, Unit 2223, Longwood, Florida, 32779, United States of America.</p>
                    </div>

                </div>
                <div className='flex flex-col flex-1/2 gap-y-4 lg:justify-center lg:items-center'>


                    <div className='flex  flex-col gap-y-0.5'>
                        <Link href={"/"} className='text-xl font-medium text-white'>
                            Case Studies
                        </Link><br />
                        <Link href={"/"} className='text-xl font-medium text-white'>
                            Pricing
                        </Link><br />
                        <Link href={"/"} className='text-xl font-medium text-white' >
                            Contact Us
                        </Link><br />

                    </div>
                    <div>
                        <button className='bg-white text-black font-semibold py-2 px-4'>
                            Get In Touch
                        </button>
                    </div>
                </div>
                <div className='flex-1/2'>

                    <form action="" className='flex flex-col gap-y-5'>

                        <h1 className='text-xl w-[240px] font-medium text-white'>
                            Subscribe to our News Channel
                        </h1>
                        <div className=' flex flex-col gap-y-2 text-white'>
                            <label htmlFor="" className='text-xl font-medium'>First Name</label>
                            <div className=' border-2 border-white p-1 w-[70%]'>
                                <input
                                    type="text"
                                    placeholder='First Name ...'
                                    className="ml-2 border-none h-9 p-0 bg-transparent w-full outline-none appearance-none shadow-none m-0 focus:ring-0"

                                />
                            </div>
                        </div>
                        <div className=' flex flex-col gap-y-2 text-white'>
                            <label htmlFor="" className='text-xl font-medium'>Last Name</label>
                            <div className=' border-2 border-white p-1 w-[70%]'>
                                <input
                                    type="text"
                                    placeholder='Last Name ...'
                                    className="ml-2 border-none h-9 p-0 bg-transparent w-full outline-none appearance-none shadow-none m-0 focus:ring-0"

                                />
                            </div>
                        </div>
                        <div className='w-[70%]'>

                            <button className='py-2 w-full text-xl font-medium text-black bg-white  '>Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </footer>


    )
}

export default Footer