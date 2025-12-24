import React from 'react';

const DropHome = () => {
    const homeOptions = [
        { id: 1, title: "Welcome", image: "/images/hotell3.avif" },
        { id: 2, title: "Special Offers", image: "/images/res1.avif" },
        { id: 3, title: "Events", image: "/images/mountain.avif" },
        { id: 4, title: "News", image: "/images/lakeview.avif" },
    ];

    return (
        <div className="w-full bg-black py-14  border-y border-emerald-700/50 ">
            <div className="w-full">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-10">
                    {homeOptions.map((option) => (
                        <div key={option.id} className="group cursor-pointer flex flex-col items-center">
                            <div className="relative overflow-hidden h-72 w-56 mb-3 transition-transform duration-500 group-hover:-translate-y-3">
                                <img
                                    src={option.image}
                                    alt={option.title}
                                    className="w-full h-full object-cover  "
                                />
                                <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20"></div>
                            </div>
                            <span className={`text-white text-sm transition-colors text-center font-medium`}>
                                {option.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DropHome;
