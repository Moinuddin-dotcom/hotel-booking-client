import React, { useState } from 'react'
import { TfiGoogle } from 'react-icons/tfi'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet'
import axios from 'axios'

const Login = () => {
    const { userlogIn, setUser, handleGoolgeLogIn } = useAuth()
    const [error, setError] = useState({})
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    // const from = '/'



    const handleGoolge = async () => {
        try {
            const result = await handleGoolgeLogIn()
            // const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/jwt`, { email: result?.user?.email })
            // console.log(data)
            setUser(result?.user)
            navigate(from, { replace: true })
        } catch (error) {
            console.log("ERROR", error)
            setUser(null);
        }
    }




    const handleLogin = (e) => {


        e.preventDefault()
        const form = e.target
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
        const user = { email, password }
        // console.log(user)

        userlogIn(email, password)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log("User logged in successfully", result.user)
                toast.success('User logged in successfully')
                navigate(from, { replace: true })
                // navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                toast.error('Email or password is not valid', err)
            })

    }
    return (
        <div>
            <Helmet>
                <title>Log In | The Peninsula</title>
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
                <form onSubmit={handleLogin} className="card-body py-2">
                    {/* <div className="form-control">
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
                    </div> */}
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
                    {/* {
                      error.password &&
                      <p className="text-red-500 text-xs">{error.password}</p>
                    } */}
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-[#0C5776] to-[#001C44] text-white">Log In</button>
                    </div>
                    <div>
                        <p className="text-center">Allready have an account?
                            <Link to={"/register"} className="link link-hover text-green-600 font-semibold ml-2 underline">Register</Link>
                        </p>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Login
