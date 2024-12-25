import React, { useState } from 'react'
import useAuth from '../Hooks/useAuth'
import Rating from 'react-rating';


const UserReviews = () => {
    const { user } = useAuth()
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState('')
    // console.log(rating)

    const ratingChanged = (value) => {
        setRating(value);
    };

    const handleReviewFrom = async (e) => {
        e.preventDefault();
        const userName = user?.displayName;
        const userRating = rating;
        const userReview = review;
        const timestamp = new Date().toISOString()
        const dataFile = { userName, rating: userRating, review: userReview, timestamp };

        console.log(dataFile);

        const res = await fetch(`http://localhost:8001/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataFile)
        })
        const data = await res.json()
        console.log(data)
        document.getElementById('my_modal_2').close()

    }

    // const reviewFrom = async (e) => {
    //     e.preventDefault()
    //     const reviewdata = e.target.review.value
    //     console.log(reviewdata)
    //     // setreview(false)
    //     // e.target.reset()

    //     // setreview(false, data)
    // }



    return (
        <div className='text-center'>
            <form onSubmit={handleReviewFrom}>
                <div className="my-2">
                    <label>Username:</label>
                    <input
                        type="text"
                        value={user?.displayName}
                        readOnly
                        className="border text-center font-bold text-2xl p-2 rounded w-full bg-gray-200"
                    />
                </div>
                <div className="my-2 flex justify-center items-center gap-2">
                    <label htmlFor="rating" className='text-xl font-semibold'>Rate us: </label>
                    <Rating
                        name="rating"
                        count={5}
                        onChange={ratingChanged}
                        size={30}
                        activeColor="#ffd700"
                    />
                </div>
                <div className="my-2">
                    <label className='underline'>Place your review here:</label>
                    <textarea
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring"
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        name="review"
                        id="review"
                        rows="4"
                    />
                </div>
                <button
                    // onClick={handleSubmit}
                    className="btn btn-primary">
                    Submit Review
                </button>
            </form>
        </div>
    )
}

export default UserReviews
