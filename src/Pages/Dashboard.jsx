import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* 🔴 Navbar */}
      <div className="bg-red-500 text-white flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold">shaadi.com</h1>
        <div className="flex gap-6">
          <p>My Shaadi</p>
          <p>Matches</p>
          <p>Search</p>
          <p>Inbox</p>
        </div>
        <button className="bg-white text-red-500 px-3 py-1 rounded">
          Upgrade
        </button>
      </div>

      {/* 🟡 Main Layout */}
      <div className="flex p-4 gap-4">

        {/* 🟢 Left Sidebar */}
        <div className="w-1/4 bg-white p-4 rounded shadow">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
            <h2 className="mt-2 font-semibold">Your Name</h2>
            <p className="text-sm text-gray-500">Free Member</p>
          </div>

          <button className="mt-4 bg-blue-500 text-white w-full py-2 rounded">
            Edit Profile
          </button>
        </div>

        {/* 🔵 Center Content */}
        <div className="w-2/4 space-y-4">

          {/* Activity */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-semibold mb-2">Activity Summary</h2>
            <div className="flex justify-between">
              <div>0 Invitations</div>
              <div>0 Accepted</div>
              <div>2 Visitors</div>
            </div>
          </div>

          {/* Verification Card */}
          <div className="bg-white p-4 rounded shadow flex justify-between items-center">
            <div>
              <h2 className="font-semibold">Blue Tick Verification</h2>
              <p className="text-sm text-gray-500">
                Verify your profile with selfie
              </p>
            </div>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Get Blue Tick
            </button>
          </div>

        </div>

        {/* 🟣 Right Sidebar (Matches) */}
        <div className="w-1/4 bg-white p-4 rounded shadow">
          <h2 className="font-semibold mb-3">My Matches</h2>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <p>Riya</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <p>Pooja</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
              <p>Neha</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;