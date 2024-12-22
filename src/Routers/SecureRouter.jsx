import React from 'react'
import useAuth from '../Hooks/useAuth'
import { Navigate, useLocation } from 'react-router-dom'
import Loading from '../Pages/Loading'

const SecureRouter = ({ children }) => {
    const location = useLocation()
    const { user, loading } = useAuth()
    if (loading) {
        return <Loading />
    }

    if (user && user?.email) {
        return children
    }
    return (
        <Navigate
            state={location.pathname}
            to={"/login"}>

        </Navigate>
    )
}

export default SecureRouter
