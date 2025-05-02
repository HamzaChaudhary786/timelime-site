"use client"

import Footer from '@/commmonComponents/Footer'
import Navbar from '@/commmonComponents/Navbar'
import Apart from '@/components/landing/Apart'
import GetStarted from '@/components/landing/GetStarted'
import Landing from '@/components/landing/Landing'
import LastestIndustry from '@/components/landing/LastestIndustry'
import TopCompanies from '@/components/landing/TopCompanies'
import React from 'react'

const page = () => {
  return (
    <>
      <div className=''>

        <Navbar />
        <Landing />
        <Apart />
        <TopCompanies />
        <GetStarted />
        <LastestIndustry />
        <Footer />


      </div>
    </>
  )
}

export default page