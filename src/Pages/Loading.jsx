import React from 'react'
import Lottie from "lottie-react";
import loadingLotti from '../../src/assets/Animation/LoadingAnimation.json'

const Loading = () => {
    return (
        // <div className='text-center h-[50vh] flex justify-center items-center '>
        //     <span className="loading loading-spinner text-primary"></span>
        //     <span className="loading loading-spinner text-secondary"></span>
        //     <span className="loading loading-spinner text-accent"></span>
        //     <span className="loading loading-spinner text-neutral"></span>
        //     <span className="loading loading-spinner text-info"></span>
        //     <span className="loading loading-spinner text-success"></span>
        //     <span className="loading loading-spinner text-warning"></span>
        //     <span className="loading loading-spinner text-error"></span>
        // </div>
        <div className='max-w-[50vw] mx-auto'>
            <Lottie animationData={loadingLotti} ></Lottie>
        </div>
    )
}

export default Loading
