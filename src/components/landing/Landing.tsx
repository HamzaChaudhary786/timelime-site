"use client"


import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import city from '../../../public/assets/city.png'
import lit from '../../../public/assets/lit.png'
import gns from '../../../public/assets/gns.png'
import centaurus from '../../../public/assets/centaurus.png'
import alif from '../../../public/assets/alif.png'
import mirha from '../../../public/assets/mirha.png'
import Image from 'next/image';




const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
};

const Landing = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    // Track scroll progress within this section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // Map scroll progress to a width value (e.g., 100% → 95% → 90% → 85%)
    const bgWidth = useTransform(scrollYProgress, [0, 0.6, 1], ["110%", "100%", "95%"]);

    const smoothWidth = useSpring(bgWidth, {
        stiffness: 60,
        damping: 18,
        mass: 0.5,
    });

    return (
        <>
            <section ref={sectionRef} className="relative   flex justify-center overflow-hidden py-10 px-4 lg:px-0">
                {/* This is the animated background layer */}
                <motion.div
                    style={{ width: smoothWidth }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 bg-[#FFEAEC] py-10 rounded-b-3xl h-full z-0"
                />

                {/* This is your fixed-width content container */}
                <div className="relative z-10 flex flex-col items-center w-full max-w-6xl">
                    <motion.div
                        variants={fadeInUp}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col gap-5 lg:gap-16 py-16 justify-center items-center"
                    >
                        <h1 className="text-2xl lg:text-6xl font-bold text-[#690031] text-center">
                            We build scalable eLearning Platforms
                        </h1>
                        <p className="lg:w-[560px] text-xl text-center text-[#690031] font-medium">
                            Connect your existing platform with our enterprise-grade LMS or let us build a custom application
                        </p>
                        <div className="flex gap-x-3">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="button bg-[#690031] text-white font-medium duration-500 py-3 px-6 rounded-full hover:bg-[#F06A6A] hover:text-black"
                            >
                                Get Started
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="py-3 px-6 font-medium rounded-full border-2 duration-500 hover:bg-[#F0D3D9] border-[#690031]"
                            >
                                View Demo
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeIn}
                        initial="initial"
                        animate="animate"
                        className="relative h-[500px] lg:w-[85%] overflow-hidden group rounded-2xl"
                    >
                        <video
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        >
                            <source src="/assets/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}
                                className="text-center px-4"
                            >
                                <h2 className="text-white text-4xl font-bold drop-shadow-md mb-2">
                                    Welcome to Our Platform
                                </h2>
                                <p className="text-white text-lg drop-shadow-sm">
                                    Empowering education through technology
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className='flex flex-col gap-4 lg:gap-0 justify-center items-center px-4 lg:px-0 pt-16 '>
                <div className='flex flex-col lg:flex-row  lg:w-[80%]'>
                    <div className='lg:w-[347px] p-5 bg-slate-100 rounded-sm'>
                        <div>
                            <h1 className='w-64 font-light text-xl text-[#690031]'>
                                85% of Fortune 100 companies choose Asana
                            </h1>
                        </div>
                        <div className='flex flex-row gap-3 mt-[10px]'>
                            <div className=' w-20 h-20 bg-gradient-to-b from-[#FF7979] to-[#994848] p-4 rounded-sm'>
                            </div>
                            <div className='flex-1'>
                                <p>
                                    Mahira Riaz,
                                    Principal Shalimar Campus, The City School, PK
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="relative overflow-hidden w-full flex items-center justify-center ">
                        <div className="flex flex-row lg:gap-5 xl:gap-6 2xl:gap-14 animate-scroll">
                            <Image className="w-[100px] h-[100px] logo" src={city} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={lit} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={centaurus} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={alif} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={mirha} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={gns} alt="" />
                            {/* Duplicate the images to create a seamless loop */}
                            <Image className="w-[100px] h-[100px] logo" src={city} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={lit} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={centaurus} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={alif} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={mirha} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={gns} alt="" />
                            {/* Duplicate the images to create a seamless loop */}

                            <Image className="w-[100px] h-[100px] logo" src={city} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={lit} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={centaurus} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={alif} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={mirha} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={gns} alt="" />
                            {/* Duplicate the images to create a seamless loop */}
                            <Image className="w-[100px] h-[100px] logo" src={city} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={lit} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={centaurus} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={alif} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={mirha} alt="" />
                            <Image className="w-[100px] h-[100px] logo" src={gns} alt="" />
                        </div>
                    </div>


                </div>

            </section>

            <section className='px-4 lg:px-20 py-16 lg:py-[98px]'>
                <div>
                    <div className='lg:w-[749px]'>
                        <h1 className='font-bold text-2xl lg:text-4xl leading-tight 2xl:text-5xl'>
                            See how our solutions keeps eLearning engaging across use cases
                        </h1>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-4  gap-5 mt-[55px]'>
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="p-5 flex flex-col gap-3 justify-start items-start rounded-2xl border bg-white shadow-md transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
                            >
                                <h1 className="text-lg font-semibold text-gray-800">Heading</h1>
                                <p className="text-sm text-gray-600">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum nobis deserunt voluptatibus esse,
                                </p>
                                <button className="mt-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer">
                                    Call To Action
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </>
    );
};

export default Landing;
