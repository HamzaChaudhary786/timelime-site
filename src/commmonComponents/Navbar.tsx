

'use client';

import React, { useState } from 'react'
import logo from "../../public/assets/logo.png"
import Image from 'next/image'
import Link from 'next/link';
import { IoMenuSharp } from "react-icons/io5";

const Navbar = () => {

    const [isMenu, setIsMenu] = useState<boolean>(false);

    return (
        <>
            <nav className='relative bg-[#630404] shadow px-4 md:px-6 lg:px-10'>
                <div className='flex justify-around items-center px-3 lg:px-0'>
                    <div className="logo flex flex-1 ">
                        <Image src={logo} alt="Logo" className='w-44  h-24' />
                    </div>
                    <div className="links lg:flex flex-2 justify-center gap-6 text-[#B6B6B7] font-medium hidden ">
                        <Link href={"/"} >Home</Link>
                        <Link href={"/aboutus"} >About Us</Link>
                        <Link href={"/blog"} >Blog</Link>
                        <Link href={"/pricing"} >Pricing</Link>
                        <Link href={"/contactus"} >Contact Us</Link>

                    </div>
                    <div className="button hidden lg:flex flex-1 justify-end gap-x-6" >
                        <button className='text-[#B6B6B7] font-medium'>Login</button>
                        <button className="button bg-black text-white font-medium py-2 px-4 rounded-[4px] hover:bg-[#F06A6A] duration-500 hover:text-black">Get Started</button>
                    </div>
                    <div className='lg:hidden' onClick={() => setIsMenu(!isMenu)}>
                        <IoMenuSharp />
                    </div>
                </div>

            </nav>

            <div>
                <div
                    className={`absolute flex flex-col top-24 w-full p-4 bg-white z-50 lg:hidden transition-all duration-500 ease-in-out transform ${isMenu
                        ? 'opacity-100 translate-y-0 pointer-events-auto'
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                        }`}
                >
                    <div className="links flex flex-col gap-3 text-[#B6B6B7] font-medium">
                        <Link className='hover:text-blue-500' href={"/landing"}>Home</Link>
                        <Link className='hover:text-blue-500' href={"/aboutus"} >About Us</Link>
                        <Link className='hover:text-blue-500' href={"/pricing"}>Blog</Link>
                        <Link className='hover:text-blue-500' href={"/pricing"}>Pricing</Link>
                        <Link className='hover:text-blue-500' href={"/contactus"}>Contact Us</Link>
                    </div>
                    <div className="button flex flex-col justify-start gap-y-4 my-4">
                        <button className="button bg-black text-white font-medium py-2 px-4 rounded-[4px] hover:bg-[#F06A6A] duration-500 hover:text-black">Login</button>
                        <button className="button bg-black text-white font-medium py-2 px-4 rounded-[4px] hover:bg-[#F06A6A] duration-500 hover:text-black">Get Started</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar