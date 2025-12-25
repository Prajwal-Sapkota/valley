import React, { useState, useEffect } from "react";

const statsData = [
    { value: 80, description: "ELEGANT ROOMS" },
    { value: 4800, description: "SQ.FT EVENT HALL" },
    { value: 500, description: "WEDDING CAPACITY" },
    { value: 24, description: "HOUR SERVICE" },

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
            className="relative min-h-[96vh] w-full bg-cover bg-center flex items-center justify-center text-white py-18"
            style={{ backgroundImage: "url('/images/book.jpeg')" }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 md:px-12 w-full max-w-6xl mx-auto ">
                <span className="text-md sm:text-lg drop-shadow-md text-[#ba9d75] font-medium">
                    EXPERIENCE MOONLIT RESORT
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-5xl font-normal leading-snug py-8">
                    Discover luxury accommodation in the heart of Chitwan               
                </h3>

                <div className="bg-transparent px-4 sm:px-6 py-6 sm:py-8 w-full flex flex-col gap-8 md:flex-row md:items-center justify-between">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            {statsData.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <h2 className="text-5xl md:text-7xl font-normal text-white mb-2 drop-shadow-lg">
                                        {counts[index]}
                                    </h2>
                                    <span className="text-sm md:text-sm text-white uppercase drop-shadow-lg font-medium">
                                        {stat.description}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <button className="bg-transparent text-white border border-[#ba9d75] w-64 font-normal py-3 px-6  hover:bg-[#ab916c] transition-colors cursor-pointer mt-8 mb-4">
                    Explore Accomodation
                </button>
            </div>
        </section>
    );
}
