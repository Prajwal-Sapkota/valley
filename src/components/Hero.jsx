import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Stats from './Stats';
import { FaCircle } from 'react-icons/fa6';

const Hero = () => {
    const backgroundImageUrl = "/images/banner.jpeg";

    const [animateText, setAnimateText] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimateText(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative">
            <div
                className="relative bg-cover bg-center bg-no-repeat text-white min-h-screen"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>

                <div className="relative z-50">
                    <Navigation />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
                    <div className={`text-center w-full mt-20 transition-transform duration-700 ease-out ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <span className="flex items-center justify-center space-x-2 text-sm md:text-sm lg:text-md font-medium tracking-wide uppercase">
                            <span>Nature</span>
                            <FaCircle className="text-[6px]" />
                            <span>Luxury</span>
                            <FaCircle className="text-[6px]" />
                            <span>Culture</span>
                            <FaCircle className="text-[6px]" />
                            <span>Wellness</span>
                        </span>
                        <h3 className="text-5xl md:text-6xl lg:text-7xl font-normal  tracking-wider py-4">
                            MOONLIT RESORT
                        </h3>
                        <p className="text-xl md:text-2xl lg:text-3xl  text-emerald-50 font-light">
                            Nestled in a peaceful and serene natural setting near Chitwan National Park
                        </p>
                    </div>
                </div>

                <Stats />
            </div>
        </div>
    );
};

export default Hero;
