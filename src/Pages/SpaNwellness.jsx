import React from 'react'
import spyImg from '../../src/assets/images/spa.jpg'
import fitnessImg from '../../src/assets/images/spa-fitness.jpg'

const SpaNwellness = () => {
    return (
        <div className='max-w-[90vw] mx-auto my-10'>
            <h1 className='text-center font-semibold text-2xl lg:text-5xl' data-aos="fade-up" data-aos-once="false">Spa & Wellness</h1>
            <h1 className='font-semibold text-xl underline underline-offset-2 hidden md:flex' data-aos="fade-up" data-aos-once="false">Spa & Wellness</h1>
            <div className='space-y-4 text-gray-500 mb-10 dark:bg-gray-900 dark:text-white' data-aos="fade-up" data-aos-once="false">

                <p>- Leaving behind the pressure of everyday life, you enter a world where time stands still and relaxation pervades. Our Authentic Thai Spa offers the perfect retreat: be it to heal, pamper, rejuvenate or revitalize, rest assured that your desire will be met, completely.</p>
                <p>- Drawing on ancient rituals with modern day touches, the unique Tararom Spa treatment menu merges old with new to create luxurious treatments that recharge your body`s essential energies.
                </p>
                <p>- Leave your worries somewhere for a moment and let your spa journey begin!</p>
                <p>Hotline: 01755555555</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 dark:bg-gray-900 dark:text-white' data-aos="fade-up" data-aos-once="false">
                <div className="card bg-base-100 rounded-xl shadow-xl dark:shadow-yellow-800 dark:border-2 dark:border-yellow-900">
                    <figure>
                        <img
                            className='w-full'
                            src={spyImg}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body rounded-b-lg dark:bg-gray-900 dark:text-white">
                        <h2 className="card-title">
                            SkyPool
                        </h2>
                        <p className='text-gray-500 dark:text-gray-400'>Outdoor swimming pool on the 16th floor is the highest rooftop pool in the city, offering an impressive view over the distant green hills and city port. Get away from the city heat and come with your friends or family at the Skypool, for a day of relaxation and entertainment. We will provide you everything you need; all you have to do is just enjoy it!</p>
                        <div className="card-actions justify-end">
                            <p>Opening Hours: 07:00 AM - 06:00 PM</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 rounded-xl shadow-xl dark:shadow-yellow-800 dark:border-2 dark:border-yellow-900 ">
                    <figure>
                        <img
                            className='w-full'
                            src={fitnessImg}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body rounded-b-lg dark:bg-gray-900 dark:text-white">
                        <h2 className="card-title">
                            Shakti Fitness Centre
                            <div className="badge badge-success text-white">NEW</div>
                        </h2>
                        <p className='text-gray-500 dark:text-gray-400'>
                            Reinvigorate yourself with a healthy workout at out Shakti fitness centre. With the glimpse of the distant hill guests can enjoy the fully equipped Health Club with modern exercise machines finish up with a relaxing session in our sauna, steam bath. Saloon facility will revitalize yourself for a new day!
                        </p>
                        <div className="card-actions justify-end">
                            <p>Opening Hours: 07:00 AM - 09:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpaNwellness
