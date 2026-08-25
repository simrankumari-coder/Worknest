import React from 'react'
import WorkspaceCard from '../components/WorkspaceCard'
import { useState } from 'react'
const Workspace = ({ workspaces }) => {
    const [search, setSearch] = useState("")
    const [location, setLocation] = useState("")
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
        return workspaceSearch && workspaceLocation && workspacePrice
    })
    return (
        <div>
            <div className='flex flex-col gap-6 justify-between mt-4 p-3'>

                <div className='flex flex-col gap-2 justify-center items-center'>
                    <h1 className='text-[var(--heading)] text-5xl font-bold'>Explore Workspaces</h1>
                    <p className='text-[var--subHeading]  font-light'>Find a workspace that fits your needs.</p>
                </div>
                <div className='flex gap-3 justify-center items-center'>
                    <input value={search} onChange={handleSearch} placeholder="search workspces" className='border  w-34 h-10 px-2 outline-none rounded-lg' />
                    <select value={price} onChange={handlePrice} placeholder="price" className='border h-10 px-2  w-34 outline-none rounded-lg' >
                        <option value="">Any Price</option>
                        <option value="200">Under ₹ 200</option>
                        <option value="400">Under ₹ 400</option>
                        <option value="600">Under ₹ 600</option>
                        <option value="800">Under ₹ 800</option>
                    </select>
                    <input value={location} onChange={handleLocation} placeholder='location' className='border h-10 w-34 px-2 outline-none rounded-lg' />
                </div>
            </div>
            <div className='mt-10 px-6 py-4'>
                <h1 className='text-[var(--heading)] text-5xl font-bold'>All Workspaces</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-2 gap-3'>
                {filterWorkpaces.map(item => {
                    return <WorkspaceCard key={item.id} type={item.type} name={item.name} location={item.location} price={item.price} availability={item.availability} image={item.image} />
                })}
            </div>
        </div >
    )
}

export default Workspace
