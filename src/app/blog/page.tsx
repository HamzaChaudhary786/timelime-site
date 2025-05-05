"use client"

import Footer from "@/commmonComponents/Footer"
import Navbar from "@/commmonComponents/Navbar"
import CustomerStories from "@/components/blog/CustomerStories"
import Explore from "@/components/blog/Explore"
import Landing from "@/components/blog/Landing"

const page = () => {
    return (
        <>
            <Navbar />
            <Landing />
            <CustomerStories />
            <Explore />
            <Footer />

        </>
    )
}

export default page