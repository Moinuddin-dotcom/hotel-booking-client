import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Main = () => {
    return (
        <div className=' bg-[#f3f9f2] text-black'>
            <nav>
                <Navbar />
            </nav>
            <main className='pt-[90px]'>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Main
