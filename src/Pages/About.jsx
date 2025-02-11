import AOS from 'aos';
import React, { useEffect } from 'react'

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, [])
    return (
        <div className=' max-w-[90vw] mx-auto my-20 space-y-3'>
            <h1 className='font-semibold text-5xl text-center ' data-aos="fade-up" data-aos-once="false">About Us</h1>
            <h1 className='font-semibold text-xl' data-aos="fade-up" data-aos-once="false">
                Welcome to
                <br />
                <p className='text-yellow-700'>The Peninsula Chittagong</p>
            </h1>
            <p className='text-gray-500' data-aos="fade-up" data-aos-once="false"> The Peninsula Chittagong Limited is situated at the prestigious GEC circle of the Port City; the hotel provides superior services combining western sophistication and Chittagonian hospitality in a scenic and convenient location. Tourists can discover this unique retreat for business or pleasure just minutes from the commercial center surrounded by famous retail shops, restaurants and corporate offices.</p>
            <div className="divider"></div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" defaultChecked />
                <div className="collapse-title text-xl font-medium">Nature of Business</div>
                <div className="collapse-content">
                    <p>The Peninsula Chittagong Limited is a hotel based service oriented Company. The Company offers a premier setting of conferences, meetings and corporate events. Participants are treated by a gracious environment, where personalized service is the standard. For important events, there is a wide range of meeting rooms and venue options to choose from.</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">Paid-up Capital</div>
                <div className="collapse-content">
                    <p>Tk. 300,000,0000</p>
                </div>
            </div>
            <div className="collapse bg-base-200">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium">Paid-up Capital</div>
                <div className="collapse-content">
                    <p>Tk. 118,666,8000</p>
                </div>
            </div>
        </div>
    )
}

export default About
