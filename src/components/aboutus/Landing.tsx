"use client"


import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/logo.svg"
const Landing = () => {
    return (

        <>
            <section className="bg-[#151B26] h-[80vh] text-white px-4 lg:px-10 pt-20 pb-20">
                <div className="flex flex-col gap-y-4 justify-center items-center text-center ">
                    <h2 className='text-2xl font-semibold text-[#7D7B7B]'>About us</h2>
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl lg:w-[60%] 2xl:w-[850px]">
                        We&rsquo;re in business to help you thrive
                    </h1>

                    <p className="text-xl lg:text-2xl lg:w-[85%] 2xl:w-[1050px] ">
                        Time Technologies powers businesses by organizing work in one connected space. More than 100,000 paying organizations and millions of teams worldwide use Time Technologies  to focus on the work that counts.
                    </p>


                </div>
            </section>
            <section className='flex flex-col gap-y-6 justify-center items-center px-4 lg:px-0 my-20 lg:my-36'>

                <div>
                    <Image alt='website logo' src={logo} />
                </div>

                <p className='text-xl lg:text-[32px] font-semibold lg:w-[75%] text-center'>
                    Our story is your story. You want to do good work. You&rsquo;re motivated by mission and purpose. And you want your work to make a difference. We want the same thing.
                </p>
            </section>
        </>
    )
}

export default Landing