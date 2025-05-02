
import Image from "next/image"
import spotify from "../../../public/assets/spotify.png"
import elite from "../../../public/assets/elite.png"
import meta from "../../../public/assets/meta.png"
import pixelfed from "../../../public/assets/pixelfed.png"
import bulova from "../../../public/assets/bulova.png"
import nasa from "../../../public/assets/nasa.png"
import amazon from "../../../public/assets/amazon.png"
import { motion, useAnimation } from 'framer-motion';
import image from "../../../public/assets/image1.png"
import { useEffect, useRef, useState } from "react"


const logos = [spotify, elite, meta, pixelfed, bulova, nasa, amazon, spotify];


const BrandLogo = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);

    const [width, setWidth] = useState(0);
    const controls = useAnimation();

    // Set total width dynamically
    useEffect(() => {

        if (containerRef.current){
            setWidth(containerRef.current.scrollWidth / 2); // half because we duplicate once
        }
    }, []);

    // Start animation
    useEffect(() => {
        controls.start({
            x: [-0, -width],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: 'loop',
                    duration: 20, // Adjust this for speed
                    ease: 'linear',
                },
            },
        });
    }, [width, controls]);

    // Combine logos twice for seamless loop
    const duplicated = [...logos, ...logos];

    return (
        <>
            <section className="flex flex-col justify-center items-center px-4 lg:px-10 my-28 gap-y-16">

                <h1 className="text-2xl font-semibold lg:text-4xl 2xl:text-[40px] ">
                    LOVED BY 100,000+ ORGANIZATIONS ACROSS THE GLOBE
                </h1>

                <div className="overflow-hidden w-full py-4 bg-white">
                    <motion.div
                        className="flex gap-10"
                        ref={containerRef}
                        animate={controls}
                    >
                        {duplicated.map((logo, index) => (
                            <Image
                                key={index}
                                src={logo}
                                alt="brand logo"
                                className="h-12 w-auto object-contain"
                                priority
                            />
                        ))}
                    </motion.div>
                </div>
            </section>

            <section className=" px-4 lg:px-10 ">


                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="flex flex-1">



                        <Image
                            src={image}
                            alt="brand logo"
                        />

                    </div>
                    <div className="flex flex-col gap-y-8 justify-center items-start flex-1 ">

                        <h1 className="text-3xl font-semibold">
                            50 % OFF FOR NON-PROFITS
                        </h1>
                        <p className="lg:w-[75%] text-xl 2xl:text-2xl">Your impact is important. Asana is excited to support nonprofit organizations with specialized plan pricing. Keep work simple, keep making an impact.</p>

                        <button className="py-3 px-4 bg-black text-white font-medium">
                            Get Started
                        </button>
                    </div>
                </div>
            </section>


        </>
    )
}

export default BrandLogo