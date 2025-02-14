import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import logo from '../assets/images/Logo.webp';
import 'animate.css';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'; 

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [darkMode, setDarkMode] = useState(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    const navLinks = <>
        <NavLink to={"/"} className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-[#98d2d1] font-semibold" : "text-black dark:text-white hover:text-[#98d2d1] font-semibold"
        }>Home</NavLink>
        <NavLink to={"/rooms"} className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-[#98d2d1] font-semibold" : "text-black dark:text-white hover:text-[#98d2d1] font-semibold"
        }>Rooms</NavLink>
        <NavLink to={"/my-bookings"} className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-[#98d2d1] font-semibold" : "text-black dark:text-white hover:text-[#98d2d1] font-semibold"
        }>My Bookings</NavLink>
        <NavLink to={"/gallery"} className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-[#98d2d1] font-semibold" : "text-black dark:text-white hover:text-[#98d2d1] font-semibold"
        }>Gallery</NavLink>
        <NavLink to={"/meetingEvents"} className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-[#98d2d1] font-semibold" : "text-black dark:text-white hover:text-[#98d2d1] font-semibold"
        }>Meetings</NavLink>
    </>;

    const logoLink = <>
        <Link to={"/"} className="btn btn-ghost text-xl bg-white dark:bg-gray-800 hover:bg-white hover:border-yellow-400">
            <img className='w-10 rounded-full animate__animated animate__bounce' src={logo} alt="" />
            The Peninsula
        </Link>
    </>;

    return (
        <div className="navbar max-w-[100vw] mx-auto border-2 bg-[#f3f9f2]/55 dark:bg-gray-900 dark:text-white text-black py-5 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex space-x-5">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-center hidden md:flex">
                {logoLink}
            </div>
            <div className="navbar-end flex items-center gap-4">
               
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="btn btn-ghost btn-circle"
                >
                    {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-blue-600" />}
                </button>

                {user ? (
                    <div>
                        <Link onClick={logOut} className="btn border-2 border-[#98d2d1] hover:border-yellow-400 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-black hover:text-white">Log Out</Link>
                    </div>
                ) : (
                    <Link to={'/login'} className="btn">Log In</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;

