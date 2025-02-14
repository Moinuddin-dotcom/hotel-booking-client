import React from 'react'
import { FaStar } from 'react-icons/fa'

const ReviewCardHome = ({ reviews }) => {
    const { rating, review, timestamp, userEmail, userName, userPhoto } = reviews || []
    return (
        <div className=''>

            <div>{reviews.length}</div>
            <div className="card bg-base-100 px-5 lg:px-40 shadow-xl dark:bg-black dark:shadow-yellow-800 dark:border-2 dark:border-yellow-900">
                <div className="card-body rounded-b-lg dark:bg-gray-900 dark:text-white">
                    <div>
                        <img className='w-10 h-10 rounded-full' src={userPhoto} alt="" />
                    </div>
                    <h2 className="card-title">{userName}</h2>
                    <p className='flex items-center gap-2'>{rating} <FaStar className='text-yellow-400' /> out of 5</p>
                    <p>{review}</p>
                    {/* <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ReviewCardHome
