import { FaBuilding, FaCar, FaCoffee, FaShieldAlt, FaSpa, FaSwimmingPool, FaTree, FaTshirt, FaUserTie, FaUtensils, FaWifi } from "react-icons/fa";

export default function Facilities() {
    const services = [

        { id: 1, title: "24-hour Security", description: "Comprehensive 24-hour security with CCTV surveillance ensuring a peaceful and secure environment.", icon: FaShieldAlt },
        { id: 2, title: "Spacious Landscaped Gardens", description: "Expansive landscaped gardens perfect for relaxation, events, and enjoying nature.", icon: FaTree },
        { id: 3, title: "Conference & Event Facilities", description: "4,800 sq. ft. multi-purpose hall with modern audiovisual support for MICE events.", icon: FaBuilding },
        { id: 4, title: "Wellness Sanctuary", description: "Luxury spa treatments, steam & sauna, jacuzzi, and ice bath therapy facilities.", icon: FaSpa },
        { id: 5, title: "All Day Dining Restaurant", description: "International cuisines and local specialties served in indoor & outdoor seating.", icon: FaUtensils },
        { id: 6, title: "Outdoor Swimming Pool", description: "Relax by our scenic outdoor swimming pool with refreshing cocktails and light bites.", icon: FaSwimmingPool },
    ];

    return (
        <div className="w-full bg-white pb-18">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    <div className="flex flex-col ">
                        <span className="text-left text-md md:text-lg font-medium text-[#55694f]">
                            DISCOVER OUR PREMIUM AMENITIES
                        </span>
                        <h3 className="text-left text-4xl md:text-5xl font-normal text-[#1b1c1b] leading-tight py-6">
                            RESORT FACILITIES
                        </h3>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 ">
                            {services.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={service.id} className="flex items-start space-x-4">
                                        <IconComponent className="text-[#55694f] mt-1" size={42} />
                                        <div>
                                            <h3 className=" text-left text-xl font-normal text-[#1b1c1b]">{service.title}</h3>
                                            <p className="text-left font-normal text-[#1b1c1b]">{service.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="flex flex-col space-y-6 py-2 lg:py-18">

                        <div className="grid grid-cols-2 gap-6">

                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[450px]">
                                    <img
                                        src="/images/jungle1.avif"
                                        alt="Jungle Safari Adventure"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[400px] mt-6">
                                    <img
                                        src="/images/spa1.avif"
                                        alt="Wellness & Spa Retreat"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}