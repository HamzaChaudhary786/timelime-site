"use client"

const Explore = () => {
    return (
        <>
            <section className="bg-[#242424] text-white px-4 lg:px-10 pt-20 pb-20">
                <div className="flex flex-col gap-y-16 justify-center items-center text-center ">
                    <h1 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl lg:w-[60%] 2xl:w-[850px]">
                        Explore what @website can do for your teams
                    </h1>
                    <p className="text-xl lg:text-2xl lg:w-[85%] 2xl:w-[1050px] ">
                        Start using @website to simplify collaboration across teams, and see your team&rsquo;s entire workstream in one place for better results.
                    </p>

                    <button className=" py-3 px-4 bg-white text-black rounded-lg">
                        Get Started
                    </button>
                </div>
            </section>
        </>
    )
}

export default Explore