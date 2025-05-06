"use client"

import Footer from "@/commmonComponents/Footer"
import Navbar from "@/commmonComponents/Navbar"
import About from "@/components/aboutus/About"
import Landing from "@/components/aboutus/Landing"
import about1 from "../../../public/assets/about1.png"
import about2 from "../../../public/assets/about2.png"
import LifeAtTimeTechnology from "@/components/aboutus/LifeAtTimeTechnology"
import OfficeLocations from "@/components/aboutus/OfficeLocation"
import FAQ from "@/commmonComponents/FAQ"

const page = () => {
    return (
        <>
            <Navbar />

            <Landing />

            <div className="my-28">
                <About

                    title={"The start of things"}
                    image={about1}
                    descp={"At Time Technologies, we are dedicated to delivering innovative and reliable technology solutions that empower businesses and individuals to stay ahead in a rapidly evolving digital world. Our commitment to quality, performance, and customer satisfaction drives everything we do. From cutting-edge systems integration to smart technology services, we aim to simplify complexities and bring efficiency to your fingertips.Founded by Awais Ul Haq, Time Technologies was built on a vision of progress and trust. With a passion for innovation and a focus on long-term value, we continue to grow as a trusted name in the tech industry. Whether you're a small business or a large enterprise, we are here to support your journey toward smarter, future-ready solutions."}
                    reverse={false}
                />
            </div>

            <div>
                <About

                    title={"What's in a name?"}
                    image={about2}
                    descp={"The name Time Technologies reflects our core belief that time is one of the most valuable resources in today’s fast-paced world. Our mission is to develop and deliver technology solutions that save time, enhance efficiency, and drive progress. By integrating smart, future-ready innovations into everyday operations, we help our clients make the most of every moment. The name symbolizes our commitment to forward-thinking solutions that not only meet today’s needs but also anticipate tomorrow’s challenges."}
                    reverse={true}
                />
            </div>

            <LifeAtTimeTechnology />

            <OfficeLocations />
            <div className="mt-16 lg:mt-0 mb-16 grid justify-items-center">

                <h2 className="text-xl lg:text-2xl lg:w-[75%] px-4 lg:px-0">
                    Each of our values is aligned with what will guide us to achieve our mission: To help humanity thrive by enabling the world&rsquo;s teams to work together effortlessly.
                </h2>



                <FAQ />
            </div>

            <Footer />
        </>
    )
}

export default page