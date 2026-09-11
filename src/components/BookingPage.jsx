import React from 'react'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
const BookingPage = ({ booking, setBooking }) => {
    const navigate = useNavigate()
    const location = useLocation()



    const { workspace } = location.state

    if (!workspace) {
        return <p>Loading...</p>
    }

    const [startDate, setStartDate] = useState("")
    const [days, setDays] = useState("")
    const [people, setPeople] = useState("")
    const [saved, setSaved] = useState(false)
    const total = days * workspace.price
    const handleBook = () => {
        setSaved(true)
        setTimeout(() => {
            setSaved(false)
        }, 5000);

        const booked = {
            workspaceName: workspace.name,
            location: workspace.location,
            startDate,
            days,
            total,
            people
        };
        const updated = [...booking, booked]
        setBooking(updated)
        localStorage.setItem("booking", JSON.stringify(updated))
        navigate("/my-booking")
    }
    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-3xl font-bold text-center mb-8">
                    Book Workspace
                </h1>

                {/* Workspace Summary */}
                <div className="bg-white border rounded-xl p-6 shadow-sm mb-6">
                    <h2 className="text-xl font-semibold">
                        {workspace.name}
                    </h2>

                    <p className="text-gray-600 mt-2">
                        📍 {workspace.location}
                    </p>

                    <p className="text-blue-600 font-semibold mt-2">
                        ₹{workspace.price} / day
                    </p>
                </div>

                {/* Booking Form */}
                <div className="bg-white border rounded-xl p-6 shadow-sm">

                    <h2 className="text-xl font-semibold mb-6">
                        Booking Details
                    </h2>

                    <div className="space-y-5">

                        <div>
                            <label className="block font-medium mb-2">
                                Start Date
                            </label>

                            <input
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                type="date"
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Number of Days
                            </label>

                            <input
                                value={days}
                                onChange={(e) => setDays(e.target.value)}
                                type="number"
                                min="1"
                                placeholder="Enter number of days"
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Number of People
                            </label>

                            <input
                                value={people}
                                onChange={(e) => setPeople(e.target.value)}
                                type="number"
                                min="1"
                                placeholder="Enter number of people"
                                className="w-full border rounded-lg p-3"
                            />
                        </div>

                    </div>

                    {/* Price Summary */}
                    <div className="border-t mt-6 pt-6 space-y-3">

                        <div className="flex justify-between">
                            <span>Price per day</span>
                            <span>₹{workspace.price}</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Number of days</span>
                            <span>{days}</span>
                        </div>

                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>{total}</span>
                        </div>

                    </div>

                    <button onClick={handleBook}
                        className="w-full mt-6 bg-[var(--heading)] text-white py-3 rounded-lg font-semibold hover:bg-gray-900"
                    >
                        Book Workspace
                    </button>

                    {saved && <div className='w-full  text-green-800 text-xl bg-slate-50 font-medium text-center rounded-md p-3 mt-4'>Your Booking Details are saved</div>}

                </div>

            </div>
        </div>
    )
}

export default BookingPage