import React from 'react'
import { useParams } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Detail = ({ workspaces }) => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [saved, setSaved] = useState(false)
    const [query, setQuery] = useState(false)
    const workspace = workspaces.find(item => item.id === id)

    const handleQuery = () => {
        setSaved(true);
        setTimeout(() => {
            setSaved(false)
        }, 5000);

    }
    if (!workspace) {
        return <p>Loading...</p>
    }
    return (
        <div className='max-w-6xl mx-auto px-12 py-10'>
            <Link to="/workspaces">
                <button className="mb-6 bg-gray-500 rounded-md p-2 text-gray-100 flex gap-1"><IoIosArrowRoundBack className='mt-1 font-bold' />Back to Workspaces</button>
            </Link>
            <div className="grid md:grid-cols-2 gap-8">
                <img src={workspace.image} alt={workspace.name} className='w-full h-[300px] object-cover rounded-2xl' />
                <div className='flex flex-col justify-center'>
                    <p className="text-sm text-gray-500">{workspace.type}</p>
                    <h1 className='text-4xl font-bold mt-2'>{workspace.name}</h1>
                    <p className='text-gray-600 mt-3 flex gap-1'><IoLocationSharp className='mt-1' />{workspace.location}</p>
                    <div className='flex items-center gap-4 mt-5'>
                        <p className='text-2xl font-semibold'>{workspace.price}

                            <span className='text-sm text-gray-500'>{" "} /day</span></p>
                        <span className='px-3 py-1 rounded-full bg-green-100 text-green-700'>{workspace.availability}</span>

                    </div>
                    {workspace.availability === "Available" ?
                        <div className='flex gap-3 w-full'>


                            <button onClick={() => {

                                navigate("/booking-page", { state: { workspace } })
                            }} className='mt-6 bg-black text-white px-6 py-3 rounded-xl'>Book Workspace</button>

                            <button onClick={() => setQuery(true)} className='mt-6 bg-black text-white px-6 py-3 rounded-xl'>Send Inquiry</button>
                        </div>
                        :
                        <button className='mt-6 bg-black text-white px-6 py-3 rounded-xl' disabled>Currently Not Available</button>
                    }
                </div>
            </div>
            <div className='mt-12'>
                <h2 className='text-2xl font-semibold mb-4'>About this workspace</h2>
                <p className='text-gray-600 leading-7 max-w-3xl'>{workspace.description}</p>
            </div>
            <div className='mt-10'>
                <h2 className='text-2xl font-semibold mb-5'>Workspace Details</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className='p-5 roundex-xl bg-gray-100'>
                        <p className='tex-sm text-gray-500'>Type</p>
                        <p className='font-medium mt-1'>{workspace.type}</p>
                    </div>
                    <div className='p-5 roundex-xl bg-gray-100'>
                        <p className='tex-sm text-gray-500'>Capacity</p>
                        <p className='font-medium mt-1'>{workspace.capacity}</p>
                    </div>
                    <div className='p-5 rounded-xl bg-gray-100'>
                        <p className='text-sm text-gray-500'>Opening Hours</p>
                        <p className='font-medium mt-1'>{workspace.opening}</p>

                    </div>
                </div>

            </div>
            <div className='mt-10'>
                <h2 className='text-2xl font-semibold mb-5'>Amenities</h2>
                <div className='flex flex-wrap gap-3'>
                    {workspace.amenities?.map((amenity) => (
                        <span key={amenity} className='px-4 py-2 rounded-full
                         bg-gray-100 text-gray-700'>{amenity}</span>
                    ))}
                </div>

            </div>
            {query &&

                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">

                    <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">

                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">
                                Send Inquiry
                            </h2>

                            <button onClick={() => setQuery(false)} className="text-gray-500 text-2xl hover:text-gray-800">
                                ×
                            </button>
                        </div>

                        <div className="space-y-4">

                            <div>
                                <label className="block font-medium mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label className="block font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    placeholder="Write your inquiry..."
                                    className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                        </div>

                        <div className="flex gap-3 mt-6">

                            <button onClick={() => setQuery(false)} className="flex-1 border border-gray-300 py-3 rounded-lg font-medium hover:bg-gray-100">
                                Cancel
                            </button>

                            <button onClick={handleQuery} className="flex-1 bg-[var(--primary)] text-white py-3 rounded-lg font-medium hover:bg-gray-900">
                                Send Inquiry
                            </button>

                        </div>
                        {saved && <div className='w-full  text-green-800 text-xl bg-slate-50 font-medium text-center rounded-md p-3 mt-4'>Your Query is Send</div>}

                    </div>
                </div>}
        </div>
    )
}

export default Detail
