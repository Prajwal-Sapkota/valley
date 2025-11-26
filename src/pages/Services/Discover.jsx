import React, { useState } from 'react';
import { FaChevronDown, FaMinus, FaPlus } from "react-icons/fa";
import { MdCall } from 'react-icons/md';

const Discover = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const services = [
        {
            title: "Transfer Service and Luggage Handling",
            description: "For our guests at our hotel, the arrival is effortless. We are pleased to arrange private limousine transfers to and from Zurich, Milan, Lucerne and Buochs airports upon request. Minibuses are available for groups. Guests arriving at the nearby Andermatt and Göschenen train stations, are met by a member of our staff who will assist with your luggage."
        },
        {
            title: "Transport and Parking",
            description: "Our comprehensive transport services include valet parking, secure underground parking facilities, and electric vehicle charging stations. We also offer complimentary shuttle services to nearby attractions and ski resorts. Our concierge can arrange car rentals and provide information on local transportation options."
        },
        {
            title: "Concierge Service",
            description: "Our dedicated concierge team is available 24/7 to assist with all your needs. From restaurant reservations and ticket bookings to arranging special experiences and local tours. We ensure every aspect of your stay is perfectly tailored to your preferences and requirements."
        },
        {
            title: "Kids Club and Family Activities",
            description: "We offer a comprehensive children's program with supervised activities, educational workshops, and entertainment for all ages. Our Kids Club features dedicated play areas, scheduled activities, and experienced childcare professionals. Family-friendly excursions and special events are regularly organized."
        },
        {
            title: "Ski Butler Service",
            description: "Experience seamless skiing with our exclusive Ski Butler service. We handle equipment storage, maintenance, and preparation. Our team assists with ski pass arrangements, provides weather updates, and coordinates with local ski schools. Enjoy complimentary hot beverages and snacks at our slopeside meeting points."
        },
        {
            title: "Complimentary Wi-Fi",
            description: "Stay connected with our high-speed complimentary Wi-Fi available throughout the property. Stream, work, and share your experiences seamlessly with our reliable internet connection. Business centers and printing facilities are also available for guests who need to work during their stay."
        }
    ];

    const toggleService = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6 sm:px-6 lg:px-8">

                {/* UPDATED: 3 Columns on large screens */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 max-w-7xl mx-auto">

                    {/* LEFT COLUMN — 1/3 */}
                    <div className="lg:col-span-1 space-y-10">
                        <div className="space-y-6">
                            <h5 className=" text-left text-sm md:text-md font-bold text-[#ba9d75]">
                                DISCOVER THE SERVICES WE OFFERED
                            </h5>
                            <h3 className="text-left text-3xl md:text-3xl font-light text-[#1b1c1b] uppercase">
                                Get an overview of our outstanding additional benefits
                            </h3>
                        </div>


                        <div className="flex items-center space-x-4">
                            {/* Big Call Icon */}
                            <MdCall className="text-5xl text-[#ba9d75]" />

                            <div className="space-y-1">
                                <p className="text-left text-sm font-medium text-[#ba9d75] uppercase tracking-widest">
                                    CALL US FOR MORE INFORMATION
                                </p>
                                <a
                                    href="tel:+41223456788"
                                    className="text-left text-2xl sm:text-4xl font-light text-black hover:text-[#ba9d75] transition-colors duration-300 inline-block"
                                >
                                    +41 22 345 67 88
                                </a>
                            </div>
                        </div>


                    </div>

                    {/* RIGHT COLUMN — 2/3 */}
                    <div className="lg:col-span-2 space-y-2 ml-15">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-100">

                                <button
                                    onClick={() => toggleService(index)}
                                    className="w-full text-left py-6 px-4  transition-colors duration-200 flex justify-between items-center"
                                >
                                    <h3 className="text-xl font-semibold text-gray-900 hover:text-[#ba9d75] pr-4 cursor-pointer">
                                        {service.title}
                                    </h3>

                                    <div className="text-gray-600 text-lg cursor-pointer">
                                        {openIndex === index ? <FaMinus /> : <FaPlus />}
                                    </div>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <div className="pb-6 px-4">
                                        <p className="text-gray-600 leading-relaxed text-lg">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Discover;
