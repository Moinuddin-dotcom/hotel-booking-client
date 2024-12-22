/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const SlideOfSlider = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover min-h-[70vh]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-[70vh] bg-gray-900/70'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-4xl'>
                        {text}
                    </h1>
                    <br />
                    <Link
                        to='/add-job'
                        className='btn btn-wide underline'
                    >
                        Rooms
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SlideOfSlider
