import React from "react";

const OwnerNotification = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Notifications
        </h1>

        <div className="space-y-4">

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold text-lg">
              Booking Confirmed
            </h2>
            <p className="text-gray-600 mt-1">
              Your workspace booking has been confirmed.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Today
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold text-lg">
              Booking Reminder
            </h2>
            <p className="text-gray-600 mt-1">
              Your workspace booking starts tomorrow.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              Yesterday
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="font-semibold text-lg">
              Booking Successful
            </h2>
            <p className="text-gray-600 mt-1">
              Your workspace has been successfully booked.
            </p>
            <p className="text-sm text-gray-400 mt-3">
              2 days ago
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OwnerNotification;