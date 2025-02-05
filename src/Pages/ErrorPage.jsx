import React from 'react'
import Lottie from "lottie-react";
import errorLotti from '../../src/assets/Animation/Animation - 1735120732157.json'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <div>
            <Helmet>
                <title>Error Page(404)</title>
            </Helmet>
            <div className='max-w-[50vw] mx-auto'>
                <Lottie animationData={errorLotti} ></Lottie>
                <div className="divider divider-error">
                    <button className="btn btn-warning ">
                        <Link to={'/'} >Return Home Page</Link>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default ErrorPage
