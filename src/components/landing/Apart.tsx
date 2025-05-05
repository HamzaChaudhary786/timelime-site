import Image from "next/image"
import google from "../../../public/assets/google.png"
import trustpilot from "../../../public/assets/trustpilot.png"
import clutch from "../../../public/assets/clutch.png"

import { motion } from "framer-motion";


const Apart = () => {

    const bounceVariant = {
        up: {
            y: -30,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            },
        },
        down: {
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeInOut",
            },
        },
    };
    return (
        <section className=" py-[80px] bg-[#C9F3FF] px-4 lg:px-10" >

            <h1 className=" font-semibold lg:font-bold text-2xl xl:text-3xl 2xl:text-[48px] text-[#10008A] mb-10">
                What sets us apart?
            </h1>

            <div className="w-full flex flex-col lg:flex-row  gap-8">

                <div className="text-[#C9F3FF] bg-[#10008A] flex flex-col lg:flex-3/5  items-start h-[500px] 2xl:h-[621px] p-8 rounded-[15px]">
                    <h1 className="text-2xl lg:text-3xl 2xl:text-[40px] h-1/2 flex items-center xl:w-[350px]">
                        We’ve built our own LMS
                    </h1>
                    <p className="lg:text-xl lg:w-[350px] 2xl:w-[445px] lg:lg:h-1/2 flex items-center font-inter-regular">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.
                    </p>
                </div>


                <div className="text-[#C9F3FF] bg-[#10008A] flex flex-col lg:flex-2/5  items-start h-[500px] 2xl:h-[621px] p-8 rounded-[15px]">
                    <h1 className="text-2xl lg:text-3xl 2xl:text-[40px] h-1/2 flex items-center xl:w-[350px">
                        We’ve built our own LMS
                    </h1>
                    <p className="lg:text-xl lg:w-[350px] 2xl:w-[445px] lg:h-1/2 flex items-center font-inter-regular">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit.
                    </p>
                </div>

            </div>

            <div className="mt-[100px] py-10">

                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex flex-row flex-1/2 gap-5 justify-center items-center">
                        {/* Image 1 */}
                        <motion.div
                            variants={bounceVariant}
                            animate={{
                                y: [0, -30, 0, 0, 0], // bounce up
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatDelay: 3,
                                duration: 3,
                                ease: "easeInOut",
                            }}
                        >
                            <Image className="w-[160px] xl:2xl:w-[180px] h-[93px]" src={google} alt="google" />
                        </motion.div>

                        {/* Image 2 */}
                        <motion.div
                            animate={{
                                y: [0, 0, 0, -30, 0], // bounce after delay
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatDelay: 3,
                                duration: 3,
                                ease: "easeInOut",
                            }}
                        >
                            <Image className="w-[160px] xl:2xl:w-[180px] h-[93px]" src={trustpilot} alt="trustpilot" />
                        </motion.div>

                        {/* Image 3 */}
                        <motion.div
                            animate={{
                                y: [0, -30, 0, 0, 0],
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatDelay: 3,
                                duration: 3,
                                ease: "easeInOut",
                            }}
                        >
                            <Image className="w-[160px] xl:2xl:w-[180px] h-[93px]" src={clutch} alt="clutch" />
                        </motion.div>
                    </div>

                    <div className="flex flex-col flex-1/2 gap-y-3 items-start">
                        <h1 className="text-[#000000] font-medium text-[30px] ">
                            Scale with fastest growing Edtech Company</h1>
                        <p className="text-[18px]">We ensure the best practices and gdpr compliant practices</p>
                        <button className="text-[#10008A] py-2 px-6 rounded-3xl border-[#10008A] border-1 font-medium">
                            Get Started
                        </button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Apart