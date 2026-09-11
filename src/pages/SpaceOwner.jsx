import React from "react";

const SpaceOwner = ({ workspaces }) => {

  const bookings =
    JSON.parse(localStorage.getItem("booking")) || [];

  const totalWorkspaces = workspaces.length;


  const totalBookings = bookings.length;

  const availableSpaces = workspaces.filter(
    (item) => item.availability === "Available"
  ).length;

  const fullSpaces = workspaces.filter(
    (item) => item.availability === "Full"
  ).length;

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Space Owner Dashboard
        </h1>

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Total Workspaces</p>
            <h2 className="text-3xl font-bold mt-2">
              {totalWorkspaces}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Total Bookings</p>
            <h2 className="text-3xl font-bold mt-2">
              {totalBookings}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Available Spaces</p>
            <h2 className="text-3xl font-bold mt-2">
              {availableSpaces}
            </h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-gray-500">Full Spaces</p>
            <h2 className="text-3xl font-bold mt-2">
              {fullSpaces}
            </h2>
          </div>

        </div>

        {/* Workspaces */}
        <h2 className="text-2xl font-bold text-gray-800 mb-5">
          All Workspaces
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {workspaces.map((workspace) => (
            <div
              key={workspace.id}
              className="bg-white rounded-xl shadow p-5"
            >

              <h3 className="text-xl font-semibold text-gray-800">
                {workspace.name}
              </h3>

              <p className="text-gray-500 mt-2">
                📍 {workspace.location}
              </p>

              <p className="mt-3">
                ₹{workspace.price} / day
              </p>

              <p className="mt-2">
                Status:{" "}
                <span
                  className={
                    workspace.availability === "Available"
                      ? "text-green-600 font-medium"
                      : "text-red-600 font-medium"
                  }
                >
                  {workspace.availability}
                </span>
              </p>

            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default SpaceOwner