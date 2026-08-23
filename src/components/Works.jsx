import React from 'react'
import workspace8 from '../assets/images/workspace8.jpg'
const Works = () => {
    return (
        <div className='rounded-md grid grid-cols-1 gap-4 lg:grid-cols-2 mt-10 px-6 py-6 bg-white'>
            <div className='flex flex-col  gap-1 p-4'>
                <div className='mb-6 mt-4'>
                    <h1 className='text-[var(--heading)] text-3xl font-bold'>Find and Book Your Perfect Workspace in 4 Easy Steps with <span className='text-teal-700'>WorkNest</span> </h1>
                </div>
                <div className='relative w-full '>
                    <div className='absolute bg-teal-700 text-white -left-4 bottom-1/2 transition  duration-300 hover:ring-1 hover:ring-teal-800 hover:shadow-lg shadow-md hover:-translate-y-2 border w-12 h-12 text-xl text-gray-700 rounded-md flex justify-center items-center'>1</div>
                    <div className='border shadow-md bg-white w-full px-4  rounded-md py-2'>

                        <h1 className='px-5 text-teal-800 text-xl font-bold '>Search for a workspace</h1>
                        <p className='px-5 text-teal-500 font-medium'>Find spaces by location, date, and type.</p>
                    </div>


                </div>
                {/* 2 */}
                <div className='relative w-full'>
                    <div className='absolute bg-teal-700 text-white -left-4 bottom-1/2 transition  duration-300 hover:ring-1 hover:ring-teal-800 hover:shadow-lg shadow-md hover:-translate-y-2 border w-12 h-12 text-xl text-gray-700 rounded-md flex justify-center items-center'>2</div>
                    <div className='border shadow-md bg-white w-full px-4  rounded-md py-2'>

                        <h1 className='px-5 text-teal-800 text-xl font-bold '>Choose your workspace</h1>
                        <p className='px-5 text-teal-500 font-medium'>Check details, price,  and availability</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='relative w-full '>
                    <div className='absolute bg-teal-700 text-white -left-4 bottom-1/2 transition  duration-300 hover:ring-1 hover:ring-teal-800 hover:shadow-lg shadow-md hover:-translate-y-2 border w-12 h-12 text-xl text-gray-700 rounded-md flex justify-center items-center'>3</div>
                    <div className='border shadow-md bg-white w-full px-4  rounded-md py-2'>

                        <h1 className='px-5 text-teal-800 text-xl font-bold '>Check Availability</h1>
                        <p className='px-5 text-teal-500 font-medium'>Make sure the space works for your needs</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='relative w-full'>
                    <div className='absolute bg-teal-700 text-white -left-4 bottom-1/2 transition  duration-300 hover:ring-1 hover:ring-teal-800 hover:shadow-lg shadow-md hover:-translate-y-2 border w-12 h-12 text-xl text-gray-700 rounded-md flex justify-center items-center'>4</div>
                    <div className='border shadow-md bg-white w-full px-4  rounded-md py-2'>

                        <h1 className='px-5 text-teal-800 text-xl font-bold '>Book your space</h1>
                        <p className='px-5 text-teal-500 font-medium'>Conirm your booking and your're ready to work</p>
                    </div>
                </div>
                <button className='px-3 mt-3 w-full text-xl py-3 bg-teal-700 text-white rounded-md'>Find Workspace</button>

            </div>
            <div className='relative rounded-lg overflow-hidden z-0 min-h-[500px] bg-cover bg-center' style={{ backgroundImage: `url(${workspace8})` }}>
                <div className='absolute  z-50 bg-black/40 inset-0 gap-2 flex flex-col justify-center items-center'>


                    <h1 className='text-white text-6xl font-bold'>How It Works</h1>
                    <p className='text-white text-xl'>Find and book your perfect workspace in 4 easy steps</p>
                </div>

            </div>
        </div>
    )
}

export default Works
