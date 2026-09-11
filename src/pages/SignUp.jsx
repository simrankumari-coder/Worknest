import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';
const SignUp = ({ setRegister, setUsername, setIsLogged }) => {
    const navigate = useNavigate()
    const [btn, setBtn] = useState(false)
    const [input, setInput] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [location, setlocation] = useState("")



    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const handleEmail = (e) => {
        setEmail(e.target.value)

        setBtn(false)

    }

    const handleLocation = (e) => {
        setlocation(e.target.value)

        setBtn(false)

    }

    const handleRole = (e) => {
        setRole(e.target.value)

        setBtn(false)
    }

    const handleInput = (e) => {
        setInput(e.target.value)
        setBtn(false)

    }
    const handleConfirmPass = (e) => {
        setConfirmPass(e.target.value)
        setBtn(false)

    }
    const handlePass = (e) => {
        setPassword(e.target.value)
        setBtn(false)
    }
    const handleBtn = (e) => {

        e.preventDefault()
        if (input === "" || password === "" || email === "" ||
            confirmPass === "" || location === "") {
            setBtn(true)

        } else {
            setBtn(false)

            setUsername(input)
            setIsLogged(true)
            setRegister({ username: input, password: password, email: email, location: location, role: role })


            setInput("")
            setPassword("")
            setConfirmPass("")
            setEmail("")
            setlocation("")
            setRole("")

            navigate("/login")
        }
    }
    return (
        <div className='bg-slate-50'>
            <div className=' flex flex-col justify-center items-center '>

                <h2 className='mt-5 mb-4 justify-center items-center flex gap-2 text-2xl md:text-4xl text-[var(--heading)] font-bold'>Create Your Account</h2>

            </div>
            <form onSubmit={handleBtn} className=' mb-4 w-full bg-white mx-auto max-w-md  shadow-lg rounded-xl p-4 flex flex-col gap-5 font-semibold items-center justify-center  h-auto mt-4 '>
                <label className=' w-full flex flex-col gap-2 font-medium text-slate-700'>Username:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600' type="text" value={input} onChange={handleInput} placeholder='Enter your username' />
                    {(input.length < 2 && input != "") && <span className='text-red-600  text-sm '>Username must has atleast two characters</span>}
                </label>
                <label className=' w-full  flex flex-col gap-2 font-medium text-slate-700'>E-mail:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600' type="email" value={email} onChange={handleEmail} placeholder='xyz@gmail.com' />
                    {(!emailRegex.test(email) && email !== "") && <span className='text-red-600  text-sm'>Please enter a valid email</span>}
                </label>
                <label className=' w-full  flex flex-col gap-2 font-medium text-slate-700'>Password:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600' placeholder='Enter your Password' type='password' value={password} onChange={handlePass} />
                    {(password.length > 6 && password != "") && <span className='text-red-600  text-sm '>Password should be less than 6 characters</span>}

                </label>
                <label className=' w-full flex flex-col gap-2 font-medium text-slate-700'>Confirm Password:
                    <input className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600' placeholder='CorrectPassword' type='password' value={confirmPass} onChange={handleConfirmPass} />
                    {(confirmPass !== password && confirmPass != "") && <span className='text-red-600  text-sm'>Password didn't match</span>}
                </label>
                <label className=' w-full flex flex-col gap-2 font-medium text-slate-700'>
                    Your Location:
                    <input value={location} onChange={handleLocation} placeholder='your town/city/country' className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600' />
                </label>
                <label className=' w-full flex flex-col gap-2 font-medium text-slate-700'>
                    Your Role:
                    <select value={role} onChange={handleRole} className='border border-slate-300 rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-600'>
                        <option value="" disabled>Your Role</option>
                        <option value="User">User</option>
                        <option value="Space Owner">Space Owner</option>
                    </select>
                </label>

                <button type='submit' className='mt-3 bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition'>Sign In</button>

                {btn === true && <span className='text-red-600  text-sm '>All fields are required</span>}

                <div className='border-t border-slate-200 w-full flex flex-col justify-center items-center'>
                    <h2>Already have an account?</h2>
                    <Link to='/login'>
                        <h2 className='font-medium text-slate-700'>Login</h2>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default SignUp
