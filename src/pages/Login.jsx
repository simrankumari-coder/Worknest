import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaHandsClapping } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Login = ({ register, setIsLogged, setUsername }) => {
  
    const navigate = useNavigate()
    const [btn, setBtn] = useState(false)
    const [input, setInput] = useState("")
    const [password, setPassword] = useState("")


    const handleInput = (e) => {
        setInput(e.target.value)
        setBtn(false)

    }
    const handlePass = (e) => {
        setPassword(e.target.value)
        setBtn(false) //it stops eror when user staart typing
    }
    const handleBtn = (e) => {
        e.preventDefault();
        if (input === "" || password === "") {
            setBtn(true)

        } else {
            if ((register?.username !== input && input !== "") || (register?.password !== password && password !== "")) {
                return
            } else {

                setBtn(false)
                setUsername(input)
                setIsLogged(true)
                localStorage.setItem("username", JSON.stringify(input))
                localStorage.setItem("IsLogged", JSON.stringify(true))
                setInput("")
                setPassword("")
                navigate("/")
            }
        }
    }
    return (
        <div className='bg-slate-50 max-w-6xl mx-auto px-6 py-12'>

            <div className=' flex flex-col justify-center items-center px-4'>

                <h2 className='md:mt-4 mt-2 justify-center items-center flex gap-2 text-2xl md:text-4xl text-[var(--heading)] font-bold'>Welcome Back <FaHandsClapping className='mt-2' /></h2>
                <p className='md:text-xl text-sm font-semibold  text-gray-500'>SignIn to Smart CoWorking</p>
            </div>
            <form onSubmit={handleBtn} className=' mb-4 w-full bg-white mx-auto max-w-md  shadow-lg rounded-xl p-8 flex flex-col gap-5 font-semibold items-center justify-center  h-auto mt-4 '>
                <label className='flex flex-col gap-2 font-medium text-slate-700'>Username:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600' type="text" value={input} onChange={handleInput} placeholder='Enter your username' />
                    {(input.length < 2 && input != "") && <span className='text-red-600  text-sm '>Username must has atleast two characters</span>}
                </label>
                <label className='flex flex-col gap-2 font-medium text-slate-700'>Password:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600' placeholder='Enter your Password' type='password' value={password} onChange={handlePass} />
                    {(password.length > 6 && password != "") && <span className='text-red-600  text-sm '>Password should be less than 6 characters</span>}

                </label>

                <button type='submit' className='mt-3 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition'>Sign In</button>

                {btn === true && <span className='text-red-600  text-sm '>Username and password can't be empty</span>}
                {((register?.username !== input && input !== "") || (register?.password !== password && password !== "")) && <span className='text-red-600  text-sm'>Enter a Valid username or password</span>}

                <div className='border-t border-slate-200 w-full flex flex-col justify-center items-center'>
                    <h2>Don't have an account?</h2>
                    <Link to='/signup'>
                        <h2 className='font-medium text-slate-700'>Sign Up</h2>
                    </Link>
                </div>
            </form>
        </div >
    )
}
export default Login
