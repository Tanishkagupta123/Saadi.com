import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative">

      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-50">
        <nav className="flex justify-end items-center px-12 py-6">
          <ul className="flex space-x-8 text-blue-300 text-lg font-medium">
            <li>
              <Link to="/login" className="hover:text-pink-400 transition">
                Login
              </Link>
            </li>
            <li>
              <Link to="/help" className="hover:text-pink-400 transition">
                Help
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Page Content */}
      <Outlet />
    </div>
  );
};

export default Layout;