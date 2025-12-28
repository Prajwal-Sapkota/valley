import React, { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";

const Hero = () => {
    const backgroundImageUrl = "/images/roomhero.jpg";
    const [animateText, setAnimateText] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimateText(true), 200);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            ></div>
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Navbar */}
            <div className="relative z-50">
                <Navigation />
            </div>

            {/* TEXT CENTER */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center justify-center">
                <div className={`text-center w-full mt-20 transition-transform duration-700 ease-out ${animateText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    }`}>
                    <h3 className="text-white text-2xl md:text-3xl lg:text-7xl font-normal tracking-wider py-4">
                        ROOMS & SUITES
                    </h3>

                    <p className="text-white text-md md:text-lg lg:text-2xl font-normal tracking-wide mt-4">
                        Wake up to nature, unwind under the moonlight
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;