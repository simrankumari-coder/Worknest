import React from 'react'
import { useState } from 'react'
const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handleSubject = (e) => {
        setSubject(e.target.value)
    }
    const handleMessage = (e) => {
        setMessage(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!name || !email || !subject || !message) {
            alert("Please fill all fields")
            return
        }

        const formData = {
            name: name,
            email: email,
            subject: subject,
            message: message

        }
        const oldMessages = JSON.parse(localStorage.getItem("messages")) || []
        oldMessages.push(formData)
        localStorage.setItem("messages", JSON.stringify(oldMessages))
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
    }
    return (
        <div className="max-w-6xl mx-auto px-6 py-12">

            {/* Hero */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-800">
                    Contact Us
                </h1>

                <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                    Have a question or need help finding the right workspace?
                    We would love to hear from you.
                </p>
            </div>

            {/* Contact Section */}
            <div className="grid md:grid-cols-2 gap-10">

                {/* Contact Information */}
                <div>
                    <h2 className="text-2xl font-semibold mb-6">
                        Get in Touch
                    </h2>

                    <div className="space-y-5">

                        <div>
                            <h3 className="font-medium text-gray-800">
                                Email
                            </h3>
                            <p className="text-gray-600 mt-1">
                                support@worknest.com
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium text-gray-800">
                                Phone
                            </h3>
                            <p className="text-gray-600 mt-1">
                                +91 99999 99999
                            </p>
                        </div>

                        <div>
                            <h3 className="font-medium text-gray-800">
                                Location
                            </h3>
                            <p className="text-gray-600 mt-1">
                                New Delhi, India
                            </p>
                        </div>

                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-gray-100 rounded-2xl p-6">

                    <h2 className="text-2xl font-semibold mb-6">
                        Send Us a Message
                    </h2>

                    <form className="space-y-4" onSubmit={handleSubmit}>

                        <input name='name' value={name} onChange={handleName}
                            type="text"
                            placeholder="Your Name"
                            className="w-full border p-3 outline-none rounded-lg"
                        />

                        <input name='email' value={email} onChange={handleEmail}
                            type="email"
                            placeholder="Your Email"
                            className="w-full border p-3 outline-none rounded-lg"
                        />

                        <input name='subject' value={subject} onChange={handleSubject}
                            type="text"
                            placeholder="Subject"
                            className="w-full border p-3 outline-none rounded-lg"
                        />

                        <textarea name='message' value={message} onChange={handleMessage}
                            placeholder="Your Message"
                            rows="5"
                            className="w-full border p-3 outline-none rounded-lg resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
                        >
                            Send Message
                        </button>

                    </form>

                </div>

            </div>

        </div>
    );
}




export default Contact
