import React from 'react'
import { FaBuilding } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className='bg-slate-900 px-8 py-12 text-white mt-12 '>
            <footer className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
                <div className='max-w-xs'>
                    <div className='flex items-center gap-2'><FaBuilding className=' mt-1 text-3xl' />
                        <h2 className='flex gap-1 font-semibold text-3xl'>Worknest</h2></div>
                    <p className='text-white  text-sm leading-6'>Find a workspace that fite thw way you work and with your prefered Locations.</p>
                </div>
                <div className='text-white'>
                    <h2 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Quick Links</h2>
                    <ul className='flex flex-col gap-2'>
                        <Link to="/"> <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Home</li></Link>
                        <Link to="/communities">   <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Workspaces</li></Link>
                        <Link to="events">    <li className='text-gray-200 hover:text-blue-400 transition text-sm'>About</li></Link>

                    </ul>
                </div>
                <div className='text-white'>
                    <h2 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Workspaces</h2>
                    <ul className='flex flex-col gap-2'>
                    </ul>
                    <Link to="/">
                        <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Browse Workspaces</li></Link>
                    <Link to="/communities">   <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Featured Workspaces</li></Link>
                    <Link to="events">    <li className='text-gray-200 hover:text-blue-400 transition text-sm'>Workspaces Types</li></Link>

                </div>
                <div className='text-white'>
                    <h2 className='text-gray-100 text-lg font-semibold uppercase tracking-wide mb-4'>Contact</h2>
                    <p className='flex gap-1'>
                        <a className='text-gray-300 text-sm' href='https://mail.google.com/mail/?view=cm&fs=1&to=support@worknest.com' target='_blank' rel='noopener noreferer'>< FaEnvelope className='text-sm mt-1 ' /><span className=''>support@worknest.com</span></a></p>
                    <p className='flex gap-1'><a href="https://www.google.com/maps/search/?api=1query=Punjab,India" target='_blank' rel='noopener noreferer'><FaMapMarkerAlt className='mt-1' /><span>Punjab,India</span></a></p>

                    <div className='flex gap-4 mt-3'>

                        <a className='text-2xl text-gray-300 hover:text-blue-400 transition' href='https://instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                        <a className='text-2xl text-gray-300 hover:text-blue-400 transition' href='https://facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
                        <a className='text-2xl text-gray-300 hover:text-blue-400 transition' href='https://linkdin.com' target='_blank' rel='noopener noreferrer'><FaLinkedin /></a>
                    </div>
                </div>
            </footer >

            <div className='text-white border-t border-slate-700 mt-10 pt-6 text-center flex justify-center items-center text-sm text-gray-400'>
                &copy; {new Date().getFullYear()} HometownHub. All rights reserved.
            </div>
        </div >
    )
}

export default Footer
