import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const Navbar = () => {
    const { user, logOut } = useAuth()
    // console.log(user)
    const navLinks = <>
        <NavLink to={"/rooms"}>Rooms</NavLink>
        <NavLink to={"/my-bookings"}>My Bookings</NavLink>
    </>
    const logoLink = <>
        <Link to={"/"} className="btn btn-ghost text-xl">daisyUI</Link>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <ul className="menu menu-horizontal px-1 hidden lg:flex space-x-5">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-center ">
                {logoLink}

            </div>
            <div className="navbar-end">
                {
                    user ?
                        <div>
                            <Link onClick={logOut} className="btn">Log Out</Link>
                            {/* {
                                user.photoURL &&
                                <img src={user.displayName} alt={user.displayName} className="avatar" />
                            } */}
                        </div>
                        :
                        <Link to={'/login'} className="btn">Log In</Link>

                }

            </div>
        </div>
    )
}

export default Navbar
