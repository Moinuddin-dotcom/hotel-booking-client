// import React from 'react'

import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
// import { app } from "../firebase/firebase.config"
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const provider = new GoogleAuthProvider()

    // Create new user with email and password
    const newUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Log in user with email and password
    const userlogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Log in user with Google
    const handleGoolgeLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)

    }

    // Log out user
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
            .then(() => {
            })
            .catch(err => {
                console.log("Error signing out: ", err.message)
            })
    }


    // Catch log in or register user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged((auth), currentUser => {
            console.log('Caught currentUser-->', currentUser)
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }

    }, [])






    const authInfo = {
        user, setUser, newUser,
        logOut, userlogIn, handleGoolgeLogIn,
        loading

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
