import { FaCar, FaCoffee, FaSwimmingPool, FaTshirt, FaUserTie, FaWifi } from "react-icons/fa";

export default function Essentials() {
    const services = [
        { id: 1, title: "Airport Pick-up Service", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaCar },
        { id: 2, title: "Wifi & Internet", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaWifi },
        { id: 3, title: "Breakfast in Bed", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaCoffee },
        { id: 4, title: "Housekeeper Services", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaUserTie },
        { id: 5, title: "Laundry Services", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaTshirt },
        { id: 6, title: "Swimming Pool", description: "Lorem ipsum proin gravida velit auctor sde re sit amet space.", icon: FaSwimmingPool },
    ];

    return (
        <div className="w-full bg-white py-24">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">



                    <div className="flex flex-col space-y-6">

                        <div className="grid grid-cols-2 gap-6">

                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[400px] mt-6">
                                    <img
                                        src="/images/mountain.avif"
                                        alt="Winter Activities"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[450px] ">
                                    <img
                                        src="/images/lakeview.avif"
                                        alt="Summer Activities"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="flex flex-col space-y-6 mt-2">
                        <h5 className="text-left text-sm md:text-md font-bold text-[#ba9d75]">
                            DISCOVER THE SERVICES WE OFFERED
                        </h5>
                        <h3 className=" text-left text-4xl md:text-5xl font-light text-[#1b1c1b] mb-10">
                            THE ESSENTIALS
                        </h3>


                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                            {services.map((service) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={service.id} className="flex items-start space-x-4">
                                        <IconComponent className="text-[#ba9f79] mt-1" size={28} />
                                        <div>
                                            <h3 className=" text-left text-xl font-semibold text-[#1b1c1b]">{service.title}</h3>
                                            <h1 className="text-left text-[#1b1c1b]">{service.description}</h1>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}