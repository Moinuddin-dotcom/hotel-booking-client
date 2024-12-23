import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layouts/Main'
import Home from '../Pages/Home'
import Login from '../Pages/LoginRegister/Login'
import Register from '../Pages/LoginRegister/Register'
import Rooms from '../Components/Rooms'
import MyBookings from '../Components/MyBookings'
import SecureRouter from './SecureRouter'
import RoomsCard from '../Components/RoomsCard'

const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/rooms',
                element: <Rooms />
            },
            {
                path: '/my-bookings',
                element:
                    <SecureRouter>
                        <MyBookings />
                    </SecureRouter>,
            },
            {
                path: '/roomsCard/:id',
                element: <RoomsCard />
            }
        ]
    }
])

export default Routers
