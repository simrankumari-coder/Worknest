import React from 'react'
import { GoDotFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
const WorkspaceCard = ({ image, name, availability, location, type, price, id }) => {
    return (
        <div className='rounded-md bg-[var(--background)] shadow-xl transition-all duration-300  hover:shadow-2xl hover:shadow-teal-700/40 hover:-translate-y-2 mx-6 md:mx-4  my-4  md:my-2 flex flex-col gap-2 '>
            <div className='p-4 w-full h-50 '>

                <img className='rounded-md w-full  h-full block overflow-hidden object-cover ' src={image} alt='workspace image' />
            </div>
            <div className='flex flex-col gap-2 p-3'>
                <h1 className='text-teal-700 text-xl lg:text-2xl font-bold'>{name}</h1>
                <p className='text-[var(--subHeading)] text-sm flex gap-1 '><FaLocationDot className='mt-1' />{location}</p>
                <h2 className='text-gray-700'>{type}</h2>
                <div className='flex gap-3 font-medium  items-center'>

                    <p className=''>{price}/day</p>
                    <p className='flex justify-center items-center'><GoDotFill className='text-green-700 mt-1' />{availability}</p>
                </div>
                <button className='px-3 mt-3 w-full text-xl py-3 bg-[var(--primary)]  text-white rounded-md'>View Details</button>
            </div>
        </div>
    )
}

export default WorkspaceCard
