"use client"

import FAQ from "@/commmonComponents/FAQ"
import Footer from "@/commmonComponents/Footer"
import Navbar from "@/commmonComponents/Navbar"
import BrandLogo from "@/components/pricing/BrandLogo"
import Pricing from "@/components/pricing/Pricing"
const page = () => {
    return (
        <>
            <Navbar />
            <Pricing />
            <BrandLogo />
            <FAQ />

            <Footer />
        </>
    )
}

export default page