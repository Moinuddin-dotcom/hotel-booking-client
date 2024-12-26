import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Main = () => {
    return (
        <div className=' bg-gradient-to-r from-[#20312B] to-[#3A524B]'>
            <nav>
                <Navbar />
            </nav>
            <main>
                <Outlet />
            </main>
             
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Main
