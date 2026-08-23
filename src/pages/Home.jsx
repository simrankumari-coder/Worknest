import React from 'react'
import Hero from '../components/Hero'
import { BsLightningChargeFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import Works from '../components/Works';
const Home = () => {
    return (
        <div>
            <Hero />
            <section className='flex flex-col justify-center items-center'>
                <div className='mt-10 flex flex-col gap-3 justify-center items-center'>

                    <h1 className='text-[var(--heading)] text-2xl md:text-5xl font-bold'>Why Choose WorkNest </h1>
                    <p className='text-[var(--subHeading)] text-sm'>Everything you need to find and book the right workspace</p>
                </div>
                <div className='flex flex-col lg:flex-row mt-10  gap-20 '>
                    <div className='bg-white border shadow-lg  hover:shadow-xl/30 hover:shadow-gray-700  border-teal-600 hover:border-teal-700 hover:ring-1 hover:ring-teal-800  hover:-translate-y-2  transition-all duration-300 px-4 py-4 flex flex-col gap-2 justify-center items-center rounded-md'>
                        <FaLocationDot className='text-2xl text-[var(--primary)]' />
                        <h2 className='text-[var(--heading)]  text-xl font-bold'>Easy Location Search</h2>
                        <p className='text-[var(--subHeading)]'>Find workspaces near you</p>
                    </div >
                    <div className='bg-white border border-teal-600 hover:border-teal-700 hover:ring-1 hover:ring-teal-800 shadow-lg  hover:shadow-xl/30 hover:shadow-gray-700  hover:-translate-y-2  transition-all duration-300 px-4 py-4 flex flex-col gap-2 justify-center items-center rounded-md'>
                        <BsLightningChargeFill className='text-2xl text-[var(--primary)]' />
                        <h2 className='text-[var(--heading)]  text-xl font-bold'>Real-Time Availability</h2>
                        <p className='text-[var(--subHeading)]'>See which spaces are available</p>
                    </div>
                    <div className='bg-white border border-teal-600 hover:border-teal-700 hover:ring-1 hover:ring-teal-800 shadow-lg  hover:shadow-xl/30 hover:shadow-gray-700  hover:-translate-y-2 transition-all duration-300 px-4 py-4 flex flex-col gap-2 justify-center items-center rounded-md'>
                        <FaLock className='text-2xl text-[var(--primary)]' />
                        <h2 className='text-[var(--heading)]  text-xl font-bold'>Easy & Secure Booking</h2>
                        <p className='text-[var(--subHeading)]'>Book your workspace with confidence</p>
                    </div>
                </div>
            </section>
            <Works />
            <section className='w-full mx-auto lg:max-w-6xl max-w-full mt-6 flex flex-col justify-center tracking-wide gap-3 items-center'>
                <h1 className='font-bold text-5xl  text-gray-700'>Ready to find your workspace?</h1>
                <p className='text-[var(--subHeading)]'>Discover a workplace that fits the way you work</p>
                <button className='px-6 py-3 text-white wsm lg:w-xl bg-[var(--primary)] text-center font-bold text-xl rounded-md'>Explore Workspaces</button>
            </section>
        </div>
    )
}

export default Home
