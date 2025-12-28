import React from "react";
import { FaSpa, FaHotTub, FaSnowflake } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";

const activities = [
    { id: 1, title: "Luxury Spa Treatments", image: "/images/spa1.avif" },
    { id: 2, title: "Steam & Sauna", image: "/images/steam.avif" },
    { id: 3, title: "Jacuzzi Therapy", image: "/images/jacuzzi.avif" },
    { id: 4, title: "Ice Bath Therapy", image: "/images/icebath.avif" },
];

const Journey = () => {
    return (
        <div className="bg-[#55694f] py-18 px-4">
            <div className="text-center max-w-3xl mx-auto">
                <span className="text-md sm:text-lg font-normal text-[#bda17b]">MOONLIT WELLNESS SANCTUARY</span>
                <h3 className="text-3xl sm:text-3xl lg:text-4xl font-normal text-white uppercase py-8">Holistic Rejuvenation for Body, Mind & Soul</h3>
                <p className="text-md sm:text-md font-normal text-white">Rejuvenate at our wellness facilities designed for complete relaxation and restoration. Perfect for wellness tourism guests, retreat groups, and individual travelers seeking holistic wellness experiences.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8">
                {activities.map((activity, index) => (
                    <div
                        key={activity.id}
                        className={`relative overflow-hidden shadow-lg group ${index % 2 === 0 ? "-translate-y-2 sm:-translate-y-4" : "translate-y-2 sm:translate-y-4"} transition-transform duration-500 mt-10`}
                    >
                        <img
                            src={activity.image}
                            alt={activity.title}
                            className="w-full h-72 sm:h-80 md:h-120 object-cover group-hover:scale-105 transition-transform duration-600"
                        />

                        <div className="absolute inset-0 bg-black/30"></div>
                        <div className="absolute inset-2 sm:inset-3 border border-[#ba9d75] pointer-events-none"></div>

                        <div className="absolute bottom-2 w-full flex flex-col items-center text-center text-white">
                            
                            <h3 className="text-xl sm:text-xl md:text-2xl font-normal mb-10">
                                {activity.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Journey;