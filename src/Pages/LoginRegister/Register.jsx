import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { TfiGoogle } from 'react-icons/tfi'
import useAuth from '../../Hooks/useAuth'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet'

const Register = () => {
    const { user, newUser, setUser, handleGoolgeLogIn } = useAuth()
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const from = location?.state || '/'
    // console.log(user)

    const handleRegisterFrom = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        // password validation 
        if (password.length < 6) {
            setError({ ...error, password: "Password should be at least 6 characters or long." })
            toast.error('Use meaningful password')
            return
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/;
        if (!passwordRegex.test(password)) {
            setError(toast.error('Use a special password'));
            return
        }
        // password validation end
        const reg = { name, photo, email, password }
        console.log(reg)
        newUser(email, password)
            .then(async (result) => {
                const user = result.user
                toast.success('User registered successfully')
                console.log('User registered successfully', user)
                navigate('/login')
                const newReg = { name, photo, email }
                const res = await fetch('${import.meta.env.VITE_API_URL}/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newReg)
                })
                const data = await res.json();
                // setUser(data)
                console.log(data)






                // updateUserProfile({ displayName: name, photoURL: photo })
                //     .then(() => {
                //         navigate("/login")
                //     })
                //     .catch(err => {
                //         // console.log(err.message)
                //     })
                // setUser(user)
            })
            .catch(error => {
                console.log("Error creating user", error.message)
                toast.error('User already registered')
            })
    }
    const handleGoolge = () => {
        handleGoolgeLogIn()
            .then((result) => {
                setUser(result.user)
                navigate(from, { replace: true })
            })
            .catch((error) => {
                console.log("ERROR", error)
                setUser(null);
            })
    }



    return (
        <div>
            <Helmet>
                <title>Register | The Peninsula</title>
            </Helmet>
            <div className='max-w-[40vw] mx-auto bg-green-800'>
                <div className="googleLogin text-center pt-5">
                    <button
                        onClick={handleGoolge}
                        className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white btn-wide">
                        <TfiGoogle className='text-2xl text-green-500' />
                        Log in with google</button>
                </div>
                <div className="divider divider-primary my-2 mx-10">OR</div>
                <form onSubmit={handleRegisterFrom} className="card-body py-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="name" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">PhotoURL</span>
                        </label>
                        <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white font-semibold">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered text-black" required />

                    </div>
                    {
                        error.password &&
                        <p className="text-red-500 text-xs">{error.password}</p>
                    }
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white">Register</button>
                    </div>
                    <div>
                        <p className="text-center">Allready have an account?
                            <Link to={"/login"} className="link link-hover text-green-600 font-semibold ml-2 underline">Log in</Link>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register
