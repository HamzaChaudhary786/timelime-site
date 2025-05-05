
const Contact = () => {
    return (
        <>
            <section className="flex lg:h-[824px]">

                <div className="grid grid-cols-1 lg:grid-cols-2   bg-[#D9C6C6] p-4 gap-y-10 lg:p-12 lg:h-[470px]">
                    <div className="flex flex-col  gap-y-6 lg:mt-8  xl:mt-16 lg:w-[75%] ">
                        <h1 className="text-xl font-semibold lg:font-medium lg:text-[32px]">
                            Talk with our sales team
                        </h1>

                        <p>
                            Fill out your information and our representative will reach out to you. If you&rsquo;re looking for product support, visit our new Help Center. Get answers to quick questions with these resources:
                        </p>
                        <ul>
                            <li><strong>Billing management:</strong> Access your billing page</li>
                            <li><strong>Subscription management:</strong> Upgrade or change your plan</li>
                            <li><strong>Account management:</strong> Manage your account</li>
                        </ul>

                    </div>
                    <div>

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
                                <div className=" flex flex-col leading-0 lg:flex-row gap-y-3 w-full justify-center lg:items-center">
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
                                            rows={2}
                                            required
                                            placeholder="What would you like to discuss?"
                                            className="ml-2 border-none  p-0 bg-transparent py-2 w-full  outline-none appearance-none shadow-none m-0 focus:ring-0"
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

export default Contact