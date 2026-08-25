import React from 'react'
import WorkspaceCard from './WorkspaceCard'

const Hero = ({ workspaces }) => {


    return (
        <div>
            <div className='relative z-0 min-h-[500px] bg-cover bg-center' style={{ backgroundImage: "url('/images/background.jpg')" }}>
                <div className='absolute z-50 bg-black/40 inset-0 flex flex-col justify-center items-center'>

                    <div className=' flex  flex-col mt-10 gap-3 justify-center items-center text-center p-2'>
                        <h1 className='text-white text-3xl md:text-4xl font-bold'>Find Your Perfect Workspace</h1>
                        <p className='text-white/90 text-sm text-justify'>Discover flexible workspace, check  real-time availability, and book your ideal space in just a few clicks</p>
                    </div>
                    <div className='text-white/90   mt-10 flex flex-col md:flex-row justify-center items-center gap-2  '>
                        <input placeholder="location" type="text" className='border  rounded-lg outline-none px-4 py-3' />
                        <input placeholder="date" type="date" className='border rounded-lg  outline-none px-4 py-3' />
                        <select className='border rounded-lg  px-4 py-3 outline-none'>
                            <option disabled value="">Workspace Types</option>
                            <option value="desk">Desk</option>
                            <option value="meeting-room">Meeting Room</option>
                            <option value="private-office">Private Office</option>
                        </select>
                        <button className='px-6 py-3  w-36 text-black bg-white rounded-md'>Search</button>
                    </div>
                </div>
            </div>

            <section className=' flex flex-col bg-white justify-center items-center'>
                <div className='mt-10 flex flex-col gap-2 justify-center items-center p-2'>

                    <h1 className='text-[var(--heading)] text-2xl md:text-5xl font-bold'>Featured Workspaces</h1>
                    <p className='text-[var(--subHeading)] text-sm'>Discover spaces that fit the way you work.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-2 lg:gap-10 mt-5 '>

                    {workspaces.slice(0, 3).map(item => {
                        return <WorkspaceCard key={item.id} name={item.name} location={item.location} type={item.type} price={item.price} availability={item.availability} image={item.image} />
                    })}
                </div>
            </section>


        </div>
    )
}

export default Hero
