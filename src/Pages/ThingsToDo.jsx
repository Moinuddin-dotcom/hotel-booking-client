import React from 'react'

const ThingsToDo = () => {
    return (
        <div>
            <h1 className='font-semibold text-md md:text-4xl ml-5 md:ml-16 py-5' data-aos="fade-right" data-aos-once="false" >Things to do in Chattogram</h1>

            <div className='max-w-[90vw] mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-4'>
                <div className="card bg-base-100 shadow-xl dark:shadow-yellow-800 dark:border-2 dark:border-yellow-900" data-aos="fade-right" data-aos-once="false">

                    <div className="card-body rounded-xl dark:bg-gray-900 dark:text-white">
                        <h2 className="card-title">Batali Hill</h2>
                        <p className='text-gray-950 text-sm p-1 bg-gray-200 rounded-xl'>0.49 mi / 0.79 km from the hotel</p>
                        <p className='text-gray-500'>Climb up the highest hill in the city and enjoy stunning landscapes before being rewarded with a gorgeous view of Chattogram and the Bay of Bengal.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl dark:shadow-yellow-800 dark:border-2 dark:border-yellow-900" data-aos="fade-bottom" data-aos-once="false">
                    <div className="card-body rounded-xl dark:bg-gray-900 dark:text-white">
                        <h2 className="card-title">Chittagong Commonwealth War Cemetery</h2>
                        <p className='text-gray-950 text-sm p-1 bg-gray-200 rounded-xl'>0.77 mi / 1.24 km from the hotel</p>
                        <p className='text-gray-500'>Pay your respects to fallen World War II soldiers, sailors, and airmen at this picturesque tree-fringed spot. A memorial on the site pays tribute to the thousands of Indian seamen lost during the war.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl dark:shadow-yellow-800 dark:border-2 dark:border-yellow-900" data-aos="fade-bottom" data-aos-once="false">
                    <div className="card-body rounded-xl dark:bg-gray-900 dark:text-white">
                        <h2 className="card-title">Foy's Lake Amusement World</h2>
                        <p className='text-gray-950 text-sm p-1 bg-gray-200 rounded-xl'>2.11 mi / 3.40 km from the hotel</p>
                        <p className='text-gray-500'>In a scenic forest setting, this lakeside amusement park offers classic family rides like a Ferris wheel, bumper cars, and a kids’ carousel, plus paddleboats on the lake and an adjacent water park.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl dark:shadow-yellow-800 dark:border-2 dark:border-yellow-900" data-aos="fade-bottom" data-aos-once="false">
                    <div className="card-body rounded-xl dark:bg-gray-900 dark:text-white">
                        <h2 className="card-title"> M. A. Aziz Stadium</h2>
                        <p className='text-gray-950 text-sm p-1 bg-gray-200 rounded-xl'>0.15 mi / 0.24 km from the hotel</p>
                        <p className='text-gray-500'>
                            This 30,000-seat multipurpose stadium is the site of rousing cricket and soccer games.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl dark:shadow-yellow-800 dark:border-2 dark:border-yellow-900" data-aos="fade-right" data-aos-once="false">
                    <div className="card-body rounded-xl dark:bg-gray-900 dark:text-white">
                        <h2 className="card-title">  Patenga Sea Beach</h2>
                        <p className='text-gray-950 text-sm p-1 bg-gray-200 rounded-xl'>8.00 mi / 12.88 km from the hotel</p>
                        <p className='text-gray-500'>
                            Stroll along the promenade to take in Bay of Bengal vistas at this beach, popular for its spectacular sunsets. Food vendors offer seafood and other snacks.</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl dark:shadow-yellow-800 dark:border-2 dark:border-yellow-900" data-aos="fade-bottom" data-aos-once="false">
                    <div className="card-body rounded-xl dark:bg-gray-900 dark:text-white">
                        <h2 className="card-title">Zia Memorial Museum</h2>
                        <p className='text-gray-950 text-sm p-1 bg-gray-200 rounded-xl'>0.09 mi / 0.14 km from the hotel</p>
                        <p className='text-gray-500'>
                            Attached to the Circuit House, a stately government lodging built in 1913, the Zia Memorial Museum honors the assassinated president Ziaur Rahman.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThingsToDo
