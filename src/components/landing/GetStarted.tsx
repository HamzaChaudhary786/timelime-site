
const GetStarted = () => {
    return (
        <>
            <section className="bg-[#EFEFEF] p-4 lg:p-8 mt-10 lg:mt-16 2xl:mt-[97px] lg:mx-10 rounded-[15px]" >
                <div className="flex flex-col lg:flex-row gap-y-8">

                    <div className="flex flex-col flex-1/2 text-[#000000]">
                        <h1 className=" text-[40px] ">
                            Get Started Easily
                        </h1>
                        <p className="mt-8 text-xl w-[80%]">
                            Tour the platform, read a few deep dives, or kickstart your work management journey with the right template.
                        </p>
                    </div>
                    <div className="flex flex-1/2">

                        <div className="bg-[#FFFFFF] w-full p-3 py-6 lg:p-10 rounded-[15px]  shadow-[4px_4px_30px_0px_rgba(0,0,0,0.25)]">
                            <form action="" className="flex flex-col gap-y-8">

                                <div className=" flex flex-col lg:flex-row gap-y-3 w-full justify-center lg:items-center">
                                    <label htmlFor="" className="lg:w-[30%]">First Name*</label>
                                    <div className="rounded-[10px] border border-[rgba(0,0,0,0.14)] lg:w-[70%]">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Type First Name..."
                                            className="ml-2 border-none h-9 p-0 bg-transparent  w-full outline-none appearance-none shadow-none m-0 focus:ring-0"
                                        />
                                    </div>
                                </div>
                                <div className=" flex flex-col lg:flex-row gap-y-3 w-full justify-center lg:items-center">
                                    <label htmlFor="" className="lg:w-[30%]">Last Name*</label>
                                    <div className="rounded-[10px] border border-[rgba(0,0,0,0.14)] lg:w-[70%]">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Type Last Name..."
                                            className="ml-2 border-none h-9 p-0 bg-transparent  w-full outline-none appearance-none shadow-none m-0 focus:ring-0"
                                        />
                                    </div>
                                </div>

                                <div className=" flex flex-col lg:flex-row gap-y-3 w-full justify-center lg:items-center ">
                                    <label htmlFor="" className="lg:w-[30%]">Company Email*</label>
                                    <div className="rounded-[10px] border border-[rgba(0,0,0,0.14)] lg:w-[70%]">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Type Company Email..."
                                            className="ml-2 border-none h-9 p-0 bg-transparent  w-full outline-none appearance-none shadow-none m-0 focus:ring-0"
                                        />
                                    </div>
                                </div>

                                <div className=" flex flex-col lg:flex-row gap-y-3 w-full justify-center lg:items-center">
                                    <label htmlFor="" className="lg:w-[30%]">Phone Number*</label>
                                    <div className="rounded-[10px] border border-[rgba(0,0,0,0.14)] lg:w-[70%]">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Type Phone Number..."
                                            className="ml-2 border-none h-9 p-0 bg-transparent w-full outline-none appearance-none shadow-none m-0 focus:ring-0"
                                        />
                                    </div>
                                </div>

                                <div className=" flex flex-col lg:flex-row gap-y-3 w-full justify-center lg:items-center">
                                    <label htmlFor="" className="lg:w-[30%]">Company Size*</label>
                                    <div className="rounded-[10px] border border-[rgba(0,0,0,0.14)] lg:w-[70%]">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Type Company Size..."
                                            className="ml-2 border-none h-9 p-0 bg-transparent w-full outline-none appearance-none shadow-none m-0 focus:ring-0"
                                        />
                                    </div>
                                </div>

                                <div className=" flex flex-col lg:flex-row gap-y-3 w-full justify-center lg:items-center">
                                    <label htmlFor="" className="w-[30%]">Country*</label>
                                    <div className="rounded-[10px] border border-[rgba(0,0,0,0.14)] lg:w-[70%]">
                                        <input
                                            type="text"
                                            required
                                            placeholder="Type Country..."
                                            className="ml-2 border-none h-9 p-0 bg-transparent w-full outline-none appearance-none shadow-none m-0 focus:ring-0"
                                        />
                                    </div>
                                </div>


                                <div className=" flex flex-col lg:flex-row gap-y-3 w-full justify-center lg:items-center ">
                                    <label htmlFor="" className="lg:w-[30%]">What would you like to discuss?*</label>
                                    <div className="rounded-[10px] border border-[rgba(0,0,0,0.14)] lg:w-[70%] m-1">
                                        <textarea

                                            required
                                            placeholder="What would you like to discuss?"
                                            className="ml-2 border-none h-9 p-0 bg-transparent py-2 w-full  outline-none appearance-none shadow-none m-0 focus:ring-0"
                                        />
                                    </div>
                                </div>


                                <div className="flex items-start">
                                    <button className="button bg-[#540000]  rounded-full text-white font-medium py-2 px-4  hover:bg-[#F06A6A] duration-500 hover:text-black">Get Started</button>
                                </div>



                            </form>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default GetStarted