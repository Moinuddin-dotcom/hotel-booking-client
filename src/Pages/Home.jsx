import React from 'react'
import Slider from './Slider'
import Map from './Map'
import FeaturedRooms from './FeaturedRooms'
import UserReviews from './UserReviews'
import { Helmet } from 'react-helmet'
import SpecialOffersModal from './SpecialOffersModal'
import About from './About'
import SpaNwellness from './SpaNwellness'
import ThingsToDo from './ThingsToDo'
import Reviews from './Reviews'

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | The Peninsula</title>
            </Helmet>
            <header >
                <Slider />
            </header>
            <section className='bg-[#f3f9f2] dark:bg-gray-900 dark:text-white'>
                <Map />
            </section>
            <section>
                <SpecialOffersModal />
            </section>
            <section>
                <FeaturedRooms />
            </section>
            <section>
                <About />

            </section>
            <section>
                <SpaNwellness />
            </section>
            <section>
                <ThingsToDo />
            </section>
            <section>
                <Reviews />
            </section>

        </div>
    )
}

export default Home
