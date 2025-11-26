import React, { useState, useEffect } from "react";

const statsData = [
    { value: 64, description: "GUEST ROOMS" },
    { value: 25, description: "JUNIOR SUITES" },
    { value: 21, description: "DELUXE SUITES" },
    { value: 18, description: "APARTMENTS" },
];

export default function Stay() {
    const [counts, setCounts] = useState(statsData.map(() => 0));

    useEffect(() => {
        const intervals = statsData.map((stat, index) => {
            const increment = Math.ceil(stat.value / 100);
            return setInterval(() => {
                setCounts((prev) => {
                    const newCounts = [...prev];
                    if (newCounts[index] < stat.value) {
                        newCounts[index] += increment;
                        if (newCounts[index] > stat.value) newCounts[index] = stat.value;
                    }
                    return newCounts;
                });
            }, 20);
        });

        return () => intervals.forEach(clearInterval);
    }, []);

    return (
        <section
            className="relative min-h-[96vh] w-full bg-cover bg-center flex items-center justify-center text-white"
            style={{ backgroundImage: "url('/images/about.avif')" }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 w-full max-w-6xl mx-auto mt-0 sm:-mt-12">
                <h5 className="text-xs sm:text-sm mb-2 sm:mb-4 drop-shadow-md text-[#ba9d75] font-medium">
                    ENJOY YOUR STAY AT THE HOTEL
                </h5>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug mb-8 sm:mb-10">
                    Spend your comfortable holiday in the heart of the beautiful Swiss Alps
                </h3>

                <div className="bg-transparent px-4 sm:px-6 py-6 sm:py-8 w-full flex flex-col gap-8 md:flex-row md:items-center justify-between">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {statsData.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <span className="text-5xl md:text-7xl font-light text-white mb-2 drop-shadow-lg">
                                        {counts[index]}
                                    </span>
                                    <h5 className="text-sm md:text-sm text-white uppercase drop-shadow-lg">
                                        {stat.description}
                                    </h5>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="bg-transparent text-white border border-[#ba9d75] w-64 font-semibold py-3 px-6  hover:bg-[#ab916c] transition-colors cursor-pointer mt-8 mb-4">
                    Explore Accomodation
                </button>
            </div>
        </section>
    );
}
