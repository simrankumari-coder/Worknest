import React from "react";

const MyBooking = ({ booking }) => {

    return (
        <div className="min-h-screen bg-gray-50 py-10 px-4">
            <div className="max-w-5xl mx-auto">

                <h1 className="text-3xl font-bold text-center mb-8">
                    My Bookings
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Booking Card */}

                    {booking.map((item, index) => {
                        return <div key={index} className="bg-white border rounded-xl p-6 shadow-sm">
                            <div className="flex justify-between items-start">

                                <div>
                                    <h2 className="text-xl font-semibold">
                                        {item.workspaceName}
                                    </h2>

                                    <p className="text-gray-600 mt-2">
                                        {item.Location}
                                    </p>
                                </div>

                                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                                    Confirmed
                                </span>
                            </div>

                            <div className="border-t mt-5 pt-5 space-y-3">

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Start Date</span>
                                    <span>{item.startDate}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">Duration</span>
                                    <span>{item.days}</span>
                                </div>

                                <div className="flex justify-between">
                                    <span className="text-gray-600">People</span>
                                    <span>{item.people}</span>
                                </div>

                                <div className="flex justify-between text-lg font-bold pt-2">
                                    <span>Total</span>
                                    <span>{item.total}</span>
                                </div>

                            </div>
                        </div>
                    })}

                </div>
            </div>
        </div>
    );
};

export default MyBooking;