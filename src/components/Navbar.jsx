import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
    const [setMenu, setSetMenu] = useState(false)
    return (
        <nav className=' flex justify-between items-center lg:px-6 lg:py-4 px-4 py-2 border border-t relative z-50'>
            <div className='lg:text-3xl text-2xl flex text-teal-800 font-bold font-sans'>
                <FaBuilding className='text-xl lg:text-2xl mt-2 ' /> WorkNest
            </div>
            <div className='lg:flex hidden gap-8 text-xl  font-medium '>
                <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>Home </NavLink>
                <NavLink to='/workspaces' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-600"}>Workspaces</NavLink>
                <NavLink to='about' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>About</NavLink>
                <NavLink to='contact' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>Contact</NavLink>
            </div>
            <div className='lg:flex hidden  gap-8 text-xl font-medium '>
                <NavLink to='login' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>Login</NavLink>
                <NavLink to='signup' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>Sign Up</NavLink>
            </div>
            <button className='lg:hidden' onClick={() => setSetMenu(!setMenu)}> {setMenu === true ? <FaTimes /> : <GiHamburgerMenu />} </button>

            {setMenu === true &&

                <div className='bg-gray-200 text-[var(--heading)] p-5 absolute w-full top-full z-50  left-0 flex flex-col gap-4'>

                    <div className='lg:hidden flex flex-col  text-xl  font-medium '>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>Home </NavLink>
                        <NavLink to='/workspaces' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-600"}>Workspaces</NavLink>
                        <NavLink to='about' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>About</NavLink>
                        <NavLink to='contact' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>Contact</NavLink>
                    </div>
                    <div className='lg:hidden flex flex-col  text-xl font-medium '>
                        <NavLink to='login' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>Login</NavLink>
                        <NavLink to='signup' className={({ isActive }) => isActive ? "text-teal-700 font-bold" : "text-gray-500"}>Sign Up</NavLink>
                    </div>

                </div>
            }
        </nav>
    )
}

export default Navbar
