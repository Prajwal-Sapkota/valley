import { FaCar, FaCoffee, FaSwimmingPool, FaTshirt, FaUserTie, FaWifi } from "react-icons/fa";

export default function Experience() {
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

                    <div className="flex flex-col space-y-6 mt-18">
                        <h5 className="text-left text-sm md:text-md font-bold text-[#ba9d75]">
                            SEEKING A TRULY PEACEFUL EXPERIENCE
                        </h5>
                        <h3 className=" text-left text-4xl md:text-5xl font-light text-[#1b1c1b] mb-10">
                            INDULGE, ESCAPE & RELEAX IN THE MOUNTAINS
                        </h3>
                        <h3 className=" text-left text-xl md:text-xl font-light text-[#1b1c1b] mb-10">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        </h3>
                        <button className="bg-transparent text-black border border-[#ba9d75] w-48 font-semibold py-3 px-6  hover:bg-[#ab916c] hover:text-white transition-colors cursor-pointer">
                            Discover More
                        </button>
                        

                        
                    </div>

                     <div className="flex flex-col space-y-6">

                        <div className="grid grid-cols-2 gap-6">

                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[450px]">
                                    <img
                                        src="/images/mountain.avif"
                                        alt="Winter Activities"
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                </div>
                            </div>

                            <div className="group cursor-pointer">
                                <div className="relative overflow-hidden h-[400px] mt-6">
                                    <img
                                        src="/images/lakeview.avif"
                                        alt="Summer Activities"
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