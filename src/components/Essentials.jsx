import { FaCar, FaCoffee, FaSwimmingPool, FaTshirt, FaUserTie, FaWifi } from "react-icons/fa";

export default function Essentials() {
    const services = [
        { id: 1, title: "Airport Pick-up Service", description: "Complimentary transfers from nearby airports to our serene jungle resort location.", icon: FaCar },
        { id: 2, title: "High-speed Wi-Fi", description: "Stay connected with high-speed internet available throughout the entire resort premises.", icon: FaWifi },
        { id: 3, title: "Breakfast in Bed", description: "Wake up to gourmet breakfast served in your room with scenic jungle or river views.", icon: FaCoffee },
        { id: 4, title: "Multilingual Staff", description: "Our professionally trained, multilingual staff provides international standard service.", icon: FaUserTie },
        { id: 5, title: "Laundry Services", description: "Professional laundry and dry-cleaning services available for all guests.", icon: FaTshirt },
        { id: 6, title: "Outdoor Swimming Pool", description: "Relax by our scenic outdoor swimming pool with refreshing cocktails and light bites.", icon: FaSwimmingPool },
    ];

    return (
        <div className="w-full bg-white py-18">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">

                    <div className="flex flex-col space-y-6">
                        <span className="text-left text-md md:text-lg font-medium text-[#ba9d75]">
                            DISCOVER OUR PREMIUM AMENITIES
                        </span>
                        <h3 className=" text-left text-4xl md:text-5xl font-normal text-[#1b1c1b] mb-10">
                            RESORT FACILITIES
                        </h3>
                        

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            {services.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={service.id} className="flex items-start space-x-4">
                                        <IconComponent className="text-[#ba9f79] mt-1" size={42} />
                                        <div>
                                            <h3 className=" text-left text-xl font-normal text-[#1b1c1b]">{service.title}</h3>
                                            <p className="text-left font-normal text-[#1b1c1b]">{service.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                     <div className="flex flex-col space-y-6 py-2 lg:py-12">

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