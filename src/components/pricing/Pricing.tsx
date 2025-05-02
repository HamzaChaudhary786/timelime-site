import { useState } from "react";
import PricingCards from "./PricingCards";
import {
    FaCheckCircle,
    FaThLarge,
    FaLock,
    FaSyncAlt,
    FaChartBar,
    FaUsers,
    FaServer,
    FaCogs,
    FaShieldAlt,
} from "react-icons/fa";
const Pricing = () => {

    const [activeTab, setActiveTab] = useState("individual");


    const individualPlans = [
        {
            title: "Personal",
            price: 9,
            features: [
                { icon: <FaCheckCircle />, text: "Done-for-you design" },
                { icon: <FaThLarge />, text: "Component library" },
                { icon: <FaLock />, text: "Secure & private" },
                { icon: <FaSyncAlt />, text: "Real-time sync" },
                { icon: <FaChartBar />, text: "Analytics tools" },
                { icon: <FaUsers />, text: "1 team member" },
            ],
        },
        {
            title: "Starter",
            price: 19,
            features: [
                { icon: <FaCheckCircle />, text: "Advanced templates" },
                { icon: <FaThLarge />, text: "Drag & drop builder" },
                { icon: <FaLock />, text: "Encrypted access" },
                { icon: <FaSyncAlt />, text: "Auto backups" },
                { icon: <FaChartBar />, text: "Custom reports" },
                { icon: <FaUsers />, text: "Up to 5 members" },
            ],
        },
        {
            title: "Advanced",
            price: 29,
            features: [
                { icon: <FaCheckCircle />, text: "Premium support" },
                { icon: <FaThLarge />, text: "Unlimited designs" },
                { icon: <FaLock />, text: "Multi-factor security" },
                { icon: <FaSyncAlt />, text: "Live collaboration" },
                { icon: <FaChartBar />, text: "Insights dashboard" },
                { icon: <FaUsers />, text: "10 members" },
            ],
        },
    ];

    const businessPlans = [
        {
            title: "Team",
            price: 49,
            features: [
                { icon: <FaServer />, text: "Dedicated server" },
                { icon: <FaCogs />, text: "Workflow automation" },
                { icon: <FaShieldAlt />, text: "Role-based access" },
                { icon: <FaSyncAlt />, text: "Global sync" },
                { icon: <FaChartBar />, text: "Business analytics" },
                { icon: <FaUsers />, text: "25 team members" },
            ],
        },
        {
            title: "Enterprise",
            price: 99,
            features: [
                { icon: <FaServer />, text: "High performance hosting" },
                { icon: <FaCogs />, text: "Custom integration" },
                { icon: <FaShieldAlt />, text: "Data protection suite" },
                { icon: <FaSyncAlt />, text: "Multi-location sync" },
                { icon: <FaChartBar />, text: "Advanced dashboards" },
                { icon: <FaUsers />, text: "Unlimited users" },
            ],
        },
        {
            title: "Ultimate",
            price: 199,
            features: [
                { icon: <FaServer />, text: "On-premise option" },
                { icon: <FaCogs />, text: "Fully customizable" },
                { icon: <FaShieldAlt />, text: "Enterprise-grade security" },
                { icon: <FaSyncAlt />, text: "Cross-platform support" },
                { icon: <FaChartBar />, text: "Custom insights" },
                { icon: <FaUsers />, text: "Global teams" },
            ],
        },
    ];

    const plans = activeTab === "individual" ? individualPlans : businessPlans;


    return (
        <>
            <section className="px-4 lg:px-0">

                <div className="flex flex-col justify-center items-center gap-y-4 my-20 ">
                    <span className="text-[32px] text-[#3F3A3A]">
                        PRICING
                    </span>
                    <h1 className="font-semibold text-2xl lg:text-4xl 2xl:text-[62px]">
                        Easily Organize Your Work Start Free
                    </h1>
                    <p className="text-[#3F3A3A]">
                        Access eLearning features. No credit card required.
                    </p>
                </div>

                <div>
                    <div className="lg:p-6">
                        <div className="flex flex-col lg:flex-row gap-y-5 lg:justify-center space-x-4 mb-8">
                            <button
                                onClick={() => setActiveTab("individual")}
                                className={`px-5 py-2 rounded-lg font-medium transition w-full ${activeTab === "individual"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                                    }`}
                            >
                                Individuals & small teams
                            </button>
                            <button
                                onClick={() => setActiveTab("business")}
                                className={`px-5 py-2 rounded-lg font-medium transition w-full ${activeTab === "business"
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-200 text-gray-800 hover:bg-blue-100"
                                    }`}
                            >
                                Businesses & Enterprises
                            </button>
                        </div>

                        <div className="flex flex-col md:flex-row justify-center gap-6">
                            {plans.map((plan, index) => (
                                <PricingCards
                                    key={index}
                                    title={plan.title}
                                    price={plan.price}
                                    features={plan.features}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Pricing