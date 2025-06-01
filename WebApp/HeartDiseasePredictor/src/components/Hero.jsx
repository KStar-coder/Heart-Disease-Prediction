import React from 'react';
import { heart } from '../assets';
import { Parallax } from 'react-scroll-parallax';
function Hero() {
    return (

        <div className="w-full absolute top-0 left-0 right-0 bg-gradient-to-r from-slate-800 via-indigo-900 to-slate-600 pt-16">
            <div className='grid sm:grid-cols-1 md:grid-cols-2 '>
                <div className='pt-4 space-y-4 px-6 md:px-4 py-4 ml-6'>
                    <h1 className="text-white text-md font-semibold py-2 md:py-4">Empowering your heart health</h1>
                    <h1 className="text-white text-4xl font-semibold py-2 md:py-4">Predict your heart disease risk today</h1>
                    <p className="text-white text-xl font-semibold mb-10 lg:py-20">At CardioCheck AI, we harness advanced technology to empower individuals in monitoring their heart health. Our innovative heart disease prediction platform allows users to input vital health parameters and receive instant predictive insights. This proactive approach enables users to take charge of their health and make informed decisions. Join us on the journey to a healthier heart and unlock the power of data-driven insights for a brighter future.</p>
                </div>
                <div>
                    <Parallax speed={-20}>
                        <img src={heart} alt="heart" />
                    </Parallax>
                </div>
            </div>
        </div>
    );
}

export default Hero;
