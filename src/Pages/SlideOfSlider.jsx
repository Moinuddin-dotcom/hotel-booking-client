/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const SlideOfSlider = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover min-h-screen'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-screen bg-gray-900/35'>
                <div className='text-center'>
                    <h1 className='text-3xl font-semibold text-white lg:text-5xl '>
                        {text}
                    </h1>
                    <br />
                    <Link
                        to='/rooms'
                        className='btn btn-wide bg-[#98d2d1] hover:bg-[#98d2d1] 
                    hover:border-2 hover:border-yellow-400 text-white'>
                        Rooms
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SlideOfSlider
