import React from 'react'
import Slider from './Slider'
import Map from './Map'
import FeaturedRooms from './FeaturedRooms'
import UserReviews from './UserReviews'

const Home = () => {
    return (
        <div>
            <header>
                <Slider />
            </header>
            <section>
                <Map />
            </section>
            <section>
                <FeaturedRooms />
            </section>
            {/* <section>
                <UserReviews />
            </section> */}
        </div>
    )
}

export default Home
