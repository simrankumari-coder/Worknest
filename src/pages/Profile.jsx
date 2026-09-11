import React from 'react'
import { FaUser } from "react-icons/fa";
import { useState, useEffect } from 'react';
import { FaRegEdit } from "react-icons/fa";
import { useNavigate } from "react-router";
import SpaceOwner from "./SpaceOwner"
import { Link } from 'react-router-dom';
import { PiExportDuotone } from 'react-icons/pi';

const Profile = ({ handleLogout, register, workspaces }) => {
    const navigate = useNavigate();

    const [location, setLocation] = useState("")
    const [people, setPeople] = useState("")
    const [type, setType] = useState("")
    const [budget, setBudget] = useState("")
    const [amenities, setAmenities] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [saved, setSaved] = useState(false)
    const options = ["Wi-Fi", "Meeting Room", "Parking", "Cafeteria", "Security"]


    const handleLocation = (e) => {
        setLocation(e.target.value)
    }
    const handlePeople = (e) => {
        setPeople(e.target.value)
    }
    const handleType = (e) => {
        setType(e.target.value)
    }
    const handleBudget = (e) => {
        setBudget(e.target.value)
    }


    const handleSave = () => {
        const preferences = {
            location,
            people,
            type,
            budget,
            amenities
        }
        localStorage.setItem("preferences", JSON.stringify(preferences))
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 5000);
        setIsEdit(false)
    }
    useEffect(() => {
        let data = localStorage.getItem("preferences")
        if (data) {
            let preferences = JSON.parse(data)
            setLocation(preferences.location)
            setType(preferences.type)
            setPeople(preferences.people)
            setBudget(preferences.budget)
            setAmenities(preferences.amenities)
        }

    }, [])

    if (!register?.username) {
        return (
            <div className='flex flex-col items-center justify-center pt-16 min-h-screen'>
                <h2 className='text-2xl font-bold'>No Profile Found</h2>
                <p className='text-gray-600 mt-2'>Please create your profile first</p>
                <Link to="/SignUp" className='mt-4 bg-blue-700 text-white px-4 py-2 rounded'>
                    Create Profile
                </Link>
            </div>
        )
    } else {

        return (
            <div className='max-w-6xl mx-auto px-6 py-6'>
                <div className='flex justify-center items-center flex-col p-3' >
                    <span className='flex gap-2 text-2xl md:text-4xl font-bold text-[var(--heading)]'>< FaUser className=' text-4xl' />My Profile </span>
                    <p className='text-sm text-slate-700 text-center'>Manage your account and view your community activity</p>
                </div>
                <div className="flex justify-center items-center bg-[var(--background)]">

                    <div className='mt-8 bg-white  rounded-lg flex md:flex-row flex-col gap-4 md:gap-16 w-full max-w-2xl  justify-center items-center p-6 '>
                        <div className='w-20 h-20 rounded-full bg-blue-700 text-white flex items-center justify-center text-4xl font-bold shrink-0'>{register?.username?.[0]?.toUpperCase()}
                        </div>
                        <div className='flex flex-col gap-4 items-start min-w-0 w-full'>
                            <div className='flex gap-2  items-center '>
                                <span className='font-medium   whitespace-nowrap text-slate-700'>Your Name :</span>
                                <span className=' text-slate-800 text-xl'>
                                    {register.username}
                                </span>
                            </div>

                            <div className='flex gap-2 items-center w-full'>
                                <span className='font-medium whitespace-nowrap text-slate-700'>Your Email: </span>
                                <span className='text-slate-800 text-xl truncate min-w-0'>{register.email}</span> </div>
                            <div className='flex gap-2 items-center  '>
                                <span className='font-medium whitespace-nowrap text-slate-700'> HomeTown:</span>
                                <span className=' text-slate-800 text-xl  truncate '> {register.location}</span>
                            </div>
                            <div className='flex gap-2 items-center  '>
                                <span className='font-medium whitespace-nowrap text-slate-700'> Role:</span>
                                <span className=' text-slate-800 text-xl  truncate '> {register.role}</span>
                            </div>
                            <button onClick={handleLogout} className='hover:cursor-pointer p-1 w-30 bg-red-600 text-white duration-300 hover:bg-red-700 font-semibold rounded-md '>Logout</button>
                        </div>
                    </div>
                </div>
                <hr className='border-gray-300 my-6' />
                {register.role === "User" ? <div>


                    {isEdit ?


                        <div className='flex flex-col gap-6 mt-12 max-w-2xl mx-auto bg-white p-4 rounded-md justify-center '>
                            <h1 className='text-2xl md:text-4xl font-bold text-[var(--heading)] text-center'>Workspace Preferences</h1>

                            <label className='flex flex-col gap-2 font-medium text-slate-700'>Location:
                                <input value={location} onChange={handleLocation} className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-600' type='text' />
                            </label>
                            <label className='flex flex-col gap-2 font-medium text-slate-700'>People:
                                <input value={people} onChange={handlePeople} className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-gray-600' type='number' />
                            </label>
                            <div className='flex flex-col md:flex-row gap-6'>

                                <label className='flex flex-col gap-2 font-medium  text-slate-700'>Workspace Type:

                                    <select value={type} onChange={handleType} className='border rounded-lg  px-4 py-3 outline-none'>
                                        <option disabled value="">Workspace Types</option>
                                        <option value="desk">Desk</option>
                                        <option value="meeting-room">Meeting Room</option>
                                        <option value="private-office">Private Office</option>
                                    </select>
                                </label>

                                <label className='flex flex-col gap-2 font-medium text-slate-700'>Budget:

                                    <select value={budget} onChange={handleBudget} className='border-black border h-10 px-2 text-gray-500 w-34 outline-none rounded-lg' >
                                        <option value="">Your Budget</option>
                                        <option value="200">Under ₹ 10000</option>
                                        <option value="400">Under ₹ 20000</option>
                                        <option value="600">Under ₹ 30000</option>
                                        <option value="800">Under ₹ 40000</option>
                                    </select>
                                </label>
                            </div>

                            <div className='flex gap-3  flex-col '>
                                <div>

                                    <h1 className='font-medium text-slate-700'>Amenities:</h1>
                                </div>
                                <div className='flex flex-col md:flex-row gap-4'>

                                    {options.map((item) => {
                                        return <div className='flex gap-4 flex-wrap'>
                                            <input checked={amenities.includes(item)} value={amenities} onChange={(e) => {

                                                if (e.target.checked) {

                                                    setAmenities([...amenities, item])
                                                } else {
                                                    setAmenities(amenities.filter((a) => {
                                                        return a !== item
                                                    }))
                                                }

                                            }
                                            } className='' type="checkbox" />
                                            <label className='text-[17px] font-medium'>{item}</label>
                                        </div>
                                    })}

                                </div>
                            </div>
                            <div className='w-full mt-3 flex gap-3'>

                                <button onClick={handleSave} className='px-3 w-1/2 h-12 text-xl py-3 bg-[var(--primary)]  text-white rounded-md hover:bg-gray-800 cursor-pointer'>Save Preferences</button>

                            </div>
                            {saved && <div className='w-full  text-green-800 text-xl bg-slate-50 font-medium text-center rounded-md p-3 mt-4'>Your Preferences are saved</div>}

                        </div> :
                        <div className=' max-w-2xl mx-auto p-4 bg-white rounded-md'>
                            <h1 className='text-2xl md:text-4xl font-bold text-[var(--heading)] text-center'>Workspace Preferences</h1>
                            <div className="grid mt-12 grid-cols-1 sm:grid-cols-2 gap-4">

                                <div className="border rounded-lg p-4">
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">{location}</p>
                                </div>

                                <div className="border rounded-lg p-4">
                                    <p className="text-sm text-gray-500">Number of People</p>
                                    <p className="font-medium">{people}</p>
                                </div>

                                <div className="border rounded-lg p-4">
                                    <p className="text-sm text-gray-500">Workspace Type</p>
                                    <p className="font-medium">{type}</p>
                                </div>

                                <div className="border rounded-lg p-4">
                                    <p className="text-sm text-gray-500">Budget</p>
                                    <p className="font-medium">₹{budget}</p>
                                </div>

                                <div className="border rounded-lg p-4 mt-4">
                                    <p className="text-sm text-gray-500 mb-2">Amenities</p>

                                    <div className="flex flex-wrap gap-2">
                                        {amenities.map((item) => (
                                            <span className="px-3 py-1 bg-gray-100 rounded-full" key={item}>
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-12'>
                                <button onClick={() => setIsEdit(true)} className='border flex gap-1 border-[var(--primary)] w-full md:w-2/6 font-bold rounded-md h-12 text-[var(--primary)] text-xl py-3 justify-center items-center px-3 cursor-pointer'><FaRegEdit className='text-xl mt-1 font-bold' />Edit Preferences</button>
                                {saved && <div className='w-full  text-green-800 text-xl bg-slate-50 font-medium text-center rounded-md p-3 mt-4'>Your Preferences are saved</div>}

                            </div>

                        </div>

                    }
                    <div className="mt-6 space-y-4">
                        <button onClick={() => navigate("/my-booking")} className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700">
                            My Bookings
                        </button>
                        <button onClick={() => navigate("/user-notification")} className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700">
                            Notifications
                        </button>
                    </div>

                </div> :
                    <div>
                        <SpaceOwner workspaces={workspaces} />
                        <button onClick={() => navigate("/owner-notification")} className="w-full px-2 md:w-auto bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-700">
                            Notifications
                        </button>

                    </div>
                }
            </div>
        )
    }
}
export default Profile