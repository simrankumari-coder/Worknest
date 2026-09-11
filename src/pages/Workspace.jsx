import React from 'react'
import WorkspaceCard from '../components/WorkspaceCard'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Workspace = ({ workspaces }) => {
    const routeLocation = useLocation()

    const { selectLocation, type = "" } = routeLocation.state || {}
    const [search, setSearch] = useState("")
    const [location, setLocation] = useState(selectLocation || "")
    const [price, setPrice] = useState("")
    const handleSearch = (e) => {
        setSearch(e.target.value)
    }
    const handlePrice = (e) => {
        setPrice(e.target.value)
    }
    const handleLocation = (e) => {
        setLocation(e.target.value)
    }
    const filterWorkpaces = workspaces.filter((workspace) => {
        const workspaceSearch = workspace.name.toLowerCase().includes(search.toLowerCase())
        const workspaceLocation = location === "" || workspace.location.toLowerCase().includes(location.toLowerCase())
        const workspacePrice = price === "" || workspace.price <= Number(price)
        const workspaceType = type === "" || workspace.type.toLowerCase() === type.toLowerCase()

        return workspaceSearch && workspaceLocation && workspacePrice && workspaceType
    })
    return (
        <div>

            <div className='flex flex-col gap-6 justify-between mt-4 p-3'>

                <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-[var(--heading)] text-5xl font-bold text-center'>Explore Workspaces</h1>
                    <p className='text-[var--subHeading]  font-light'>Find a workspace that fits your needs.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-3 justify-center items-center'>
                    <input value={search} onChange={handleSearch} placeholder="search workspces" className='border  w-34 h-10 px-2 outline-none rounded-lg' />
                    <select value={price} onChange={handlePrice} className='border-black border h-10 px-2 text-gray-500 w-34 outline-none rounded-lg' >
                        <option value="">Any Price</option>
                        <option value="200">Under ₹ 200</option>
                        <option value="400">Under ₹ 400</option>
                        <option value="600">Under ₹ 600</option>
                        <option value="800">Under ₹ 800</option>
                    </select>
                    <input value={location} onChange={handleLocation} placeholder='location' className='border h-10 w-34 px-2 outline-none rounded-lg' />
                </div>
            </div>

            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10'>
                {filterWorkpaces.length === 0 ? (
                    <div className='col-span-full flex justify-center mt-8'>
                        <div className='bg-white border border-gray-200 shadow-md rounded-xl p-8 text-center max-w-md'>
                            <h2 className='text-xl font-semibold text-gray-700'>No Workspaces Found</h2>
                            <p className='text-gray-500 mt-2'>
                                We couldn't find any workspace matching your search. Try changing your location, type, or price.
                            </p>
                        </div>
                    </div>
                )

                    : (filterWorkpaces.map(item => {
                        return <WorkspaceCard key={item.id} type={item.type} name={item.name} location={item.location} price={item.price} availability={item.availability} image={item.image} id={item.id} />
                    }))}
            </div>
        </div >
    )
}

export default Workspace
