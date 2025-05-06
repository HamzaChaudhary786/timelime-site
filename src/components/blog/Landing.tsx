"use client"


import Image from "next/image"
import googly from "../../../public/assets/googly.svg"
import spoty from "../../../public/assets/spotify.svg"
import coca from "../../../public/assets/coca.svg"
import pixelfedy from "../../../public/assets/pixelfedy.svg"
import facebook from "../../../public/assets/fb.svg"
import weather from "../../../public/assets/weather.svg"
import LogoBanner from "@/commmonComponents/LogoBanner"






const Landing = () => {


 



    return (
        <>
            <section className="bg-[#242424] w-full py-10 lg:py-0 lg:h-screen overflow-hidden">
                <div className="flex flex-col lg:flex-row h-full gap-10 justify-center items-center px-4 lg:px-10 xl:px-20">
                    <div className="flex flex-col gap-y-9 flex-1">
                        <h1 className="font-semibold  text-[26px] lg:text-4xl xl:text-5xl 2xl:text-6xl text-white max-w-[640px]">
                            Teams do extraordinary things with @website
                        </h1>
                        <button className="py-3 px-4 w-fit bg-white text-black rounded-2xl">
                            Read Customer Stories
                        </button>
                    </div>

                    <div className="flex flex-col flex-1 gap-y-4">
                        {[
                            [googly, spoty],
                            [coca, pixelfedy],
                            [facebook, weather],
                        ].map((row, rowIndex) => (
                            <div className="flex flex-row flex-wrap w-full lg:w-auto gap-y-8 gap-x-4" key={rowIndex}>
                                {row.map((img, i) => (
                                    <div
                                        key={i}
                                        className="relative w-[300px] h-[85px] lg:w-[180px] lg:h-[80px] group overflow-hidden border border-white rounded-xl shadow-md p-3 bg-[#1a1a1a]"
                                    >
                                        <div className="relative w-full h-full">
                                            {/* First Image */}
                                            <div className="absolute top-0 left-0 transition-all duration-1000 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                                                <Image
                                                    src={img}
                                                    alt={`Logo-${i}`}
                                                    className="w-full h-[60px] object-contain"
                                                />
                                            </div>

                                            {/* Second Image */}
                                            <div className="absolute top-full left-0 transition-all duration-1000 ease-in-out group-hover:top-0 group-hover:opacity-100 opacity-0">
                                                <Image
                                                    src={img}
                                                    alt={`Logo-hover-${i}`}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            <section className="p-4 lg:p-20">
                <div className="flex flex-col gap-y-5 lg:gap-10 lg:flex-row justify-around items-center ">
                    <div className="flex flex-col text-center  2xl:w-[433px]">
                        <h3 className="text-2xl lg:text-[90px]">78%</h3>
                        <p className="lg:text-[20px]">of the Fortune 500 are @web customers*</p>
                    </div>
                    <div className="flex flex-col text-center 2xl:w-[433px]">
                        <h3 className="text-2xl lg:text-[90px] ">169,000+</h3>
                        <p className="lg:text-[20px]">paying companies in 200+ countries and territories*</p>
                    </div>
                    <div className="flex flex-col text-center 2xl:w-[433px]">
                        <h3 className="text-2xl lg:text-[90px] ">78%</h3>
                        <p className="lg:text-[20px]">weekly active users*</p>
                    </div>
                </div>


            </section>

            <div className="mt-10 px-4 lg:px-10">
                <LogoBanner />
            </div>
        </>
    )
}

export default Landing