
import Image from "next/image"
import image from "../../../public/assets/image1.png"
import LogoBanner from "@/commmonComponents/LogoBanner"




const BrandLogo = () => {
    return (
        <>
            <section className="flex flex-col justify-center items-center px-4 lg:px-10 my-28 gap-y-16">

                <h1 className="text-2xl font-semibold lg:text-4xl 2xl:text-[40px] ">
                    LOVED BY 100,000+ ORGANIZATIONS ACROSS THE GLOBE
                </h1>

                <div>
                    <LogoBanner />
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