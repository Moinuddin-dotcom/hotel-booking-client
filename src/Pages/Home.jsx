import React from 'react'
import Slider from './Slider'
import Map from './Map'
import FeaturedRooms from './FeaturedRooms'
import UserReviews from './UserReviews'
import { Helmet } from 'react-helmet'
import SpecialOffersModal from './SpecialOffersModal'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | The Peninsula</title>
            </Helmet>
            <header>
                <Slider />
            </header>
            <section>
                <Map />
            </section>
            <section>
                <SpecialOffersModal />
            </section>
            <section>
                <FeaturedRooms />
            </section>
        </div>
    )
}

export default Home
