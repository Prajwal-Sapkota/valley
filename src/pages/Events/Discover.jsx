import React, { useState } from 'react';
import { FaChevronDown, FaMinus, FaPlus } from "react-icons/fa";
import { MdCall } from 'react-icons/md';

const Discover = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const services = [
        {
            title: "Destination Weddings Planning",
            description: "Complete end-to-end wedding planning service from venue selection and decor to catering, accommodation, and guest management. Our experienced wedding planners work closely with you to create a personalized celebration that reflects your love story. We handle everything from traditional rituals to modern celebrations with flawless execution."
        },
        {
            title: "MICE & Corporate Events",
            description: "Professional management for Meetings, Incentives, Conferences, and Exhibitions. We provide comprehensive planning and execution for all types of corporate events, from intimate board meetings to large-scale international conferences. Services include venue sourcing, technical setup, accommodation management, team-building activities, and post-event analysis."
        },
        {
            title: "Local Weddings & Receptions",
            description: "Grand celebrations with vast indoor and outdoor spaces perfect for traditional Nepali weddings and receptions. We offer expert planning support for local ceremonies including mehendi, sangeet, haldi, and wedding reception. Our team ensures seamless execution of cultural rituals while providing modern amenities and professional service."
        },
        {
            title: "Banquets & AGM Events",
            description: "Spacious venues and professional support for annual general meetings, corporate banquets, and formal gatherings. Our 4,800 sq. ft. multi-purpose hall and board meeting rooms can accommodate various seating arrangements. We provide customized packages including audiovisual support, catering, and accommodation."
        },
        {
            title: "Birthday & Private Celebrations",
            description: "Create unforgettable moments for special occasions with our private event planning services. Whether it's a milestone birthday, anniversary, or family celebration, our team helps design personalized experiences. We offer themed decorations, customized menus, entertainment options, and dedicated event coordination."
        },
        {
            title: "Professional Event Coordination",
            description: "Our experienced events team ensures flawless execution from initial planning to celebration day. We manage vendor coordination, timeline management, guest services, and on-site supervision. With multilingual staff and international service standards, we guarantee memorable events that exceed expectations."
        }
    ];

    const toggleService = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-12 sm:py-16 md:py-18 bg-white">
            <div className="container mx-auto px-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 max-w-7xl mx-auto">

                    {/* LEFT COLUMN — 1/3 */}
                    <div className="lg:col-span-1 space-y-6 md:space-y-8 lg:space-y-10">
                        <div className="text-center lg:text-left space-y-4 md:space-y-6 py-2">
                            <span className="text-sm sm:text-md md:text-lg font-medium tracking-wider text-[#55694f]">
                                EVENT SERVICES OVERVIEW
                            </span>
                            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal uppercase pt-4 sm:pt-6 text-[#1b1c1b]">
                                Event Planning & Management
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base lg:text-lg px-4 lg:px-0 text-justify">
                                Moonlit Resort offers professional event management services for weddings, corporate events, and social celebrations. Our experienced team ensures every detail is perfectly executed.
                            </p>
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Big Call Icon */}
                            <MdCall className="text-6xl text-[#ba9d75]" />

                            <div className="space-y-1 text-left">
                                <span className="text-sm font-medium text-[#ba9d75] uppercase tracking-widest">
                                    CALL FOR EVENT ENQUIRIES
                                </span>
                                <a href="tel:+9779804161233">
                                    <h2
                                        className="text-2xl sm:text-4xl font-light text-black hover:text-[#ba9d75] transition-colors duration-300 inline-block number"
                                    >
                                        +977 9804161233
                                    </h2>
                                </a>

                                <p className="text-gray-600 text-sm mt-2">
                                    Contact our events team for customized proposals
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN — 2/3 */}
                    <div className="lg:col-span-2 space-y-2">
                        {services.map((service, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden">

                                <button
                                    onClick={() => toggleService(index)}
                                    className="w-full text-left py-6 px-6 transition-colors duration-200 flex justify-between items-center hover:bg-gray-50"
                                >
                                    <h3 className="text-xl font-medium text-gray-900 hover:text-[#ba9d75] pr-4 cursor-pointer">
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
                                    <div className="pb-6 px-6">
                                        <p className="text-gray-600 leading-relaxed text-lg font-normal text-justify">
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