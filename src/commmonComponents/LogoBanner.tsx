
import Image from "next/image"
import spotify from "../../public/assets/spotify.png"
import elite from "../../public/assets/elite.png"
import meta from "../../public/assets/meta.png"
import pixelfed from "../../public/assets/pixelfed.png"
import bulova from "../../public/assets/bulova.png"
import nasa from "../../public/assets/nasa.png"
import amazon from "../../public/assets/amazon.png"
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from "react"



const logos = [spotify, elite, meta, pixelfed, bulova, nasa, amazon, spotify];


const LogoBanner = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const [width, setWidth] = useState(0);
    const controls = useAnimation();

    // Set total width dynamically
    useEffect(() => {

        if (containerRef.current) {
            setWidth(containerRef.current.scrollWidth / 2); // half because we duplicate once
        }
    }, []);

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


    const duplicated = [...logos, ...logos];
    return (
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
    )
}

export default LogoBanner