import { FaCar, FaClock, FaCoffee, FaSwimmingPool, FaTshirt, FaUserTie, FaWifi } from "react-icons/fa";

export default function Information() {

    const services = [
        { id: 1, title: "Cuisine", description: "Seasonal, Regional, Mediterranean", icon: FaCoffee },
        { id: 2, title: "Dietary Habits & Allergies", description: "Vegetarian, Vegan, Lactose-free, Gluten-free", icon: FaTshirt },
        { id: 3, title: "Serving", description: "Breakfast, Lunch, Dinner", icon: FaUserTie },
    ];

    return (
        <div className="w-full bg-white py-24">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

                    {/* LEFT IMAGES */}
                    <div className="flex flex-col space-y-6">


                        <div className="relative ">
                            {/* Main Image */}
                            <div className="relative z-10 ml-2">
                                <img
                                    src="/images/spa.avif"
                                    alt="Restaurant Interior"
                                    className="w-[900px] h-[450px] object-cover shadow-xl brightness-70"
                                />

                            </div>
                        </div>
                    </div>

                    {/* RIGHT TEXT SECTION */}
                    <div className="flex flex-col space-y-6 mt-2 ml-10">

                        <h5 className="text-left text-sm md:text-md font-bold text-[#ba9d75] uppercase">
                            SOOTHE YOUR SOUL
                        </h5>

                        <h3 className="text-left text-4xl md:text-5xl font-light text-[#1b1c1b] mb-10 uppercase">
                            SPA TREATMENT
                        </h3>
                        <p className="text-left text-sm md:text-lg font-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <ul className="list-disc marker:text-[#ba9d75] text-black pl-6 text-left ">
                            <li>Massage, Body Treatment & Facial Treatment</li>
                            <li>Two Saunas & One Steam bath</li>
                            <li>Bio- and Finnish saunas</li>
                        </ul>

                        <button className="bg-[#ba9d75] text-white border border-[#ba9d78] w-64 py-3 font-semibold hover:bg-[#ab916c] mt-6">
                            Request Information
                        </button>


                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-24">


                    {/* LEFT IMAGES */}
                    <div className="flex flex-col space-y-6 mt-24">
                        <h5 className="text-left text-sm md:text-md font-bold text-[#ba9d75] uppercase mt-10">
                            KEEP UP YOUR HEALTHY ROUTINE
                        </h5>

                        <h3 className="text-left text-4xl md:text-5xl font-light text-[#1b1c1b] mb-10 uppercase">
                            Personal Training & Movement
                        </h3>
                        <p className="text-left text-sm md:text-lg font-light">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <div className="text-left space-y-2 text-black">
                            <span className=" text-2xl font-light">Opening Hours</span>

                            <div className="flex items-center gap-2 mt-4">

                                <FaClock className="text-[#ba9d75]" />
                                <span>7:00 am - 9:00 pm</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <FaClock className="text-[#ba9d75]" />
                                <span>10:00 am - 9:00 pm</span>
                            </div>
                        </div>


                        <button className="bg-[#ba9d75] text-white border border-[#ba9d78] w-64 py-3 font-semibold hover:bg-[#ab916c] mt-6">
                            Request Information
                        </button>


                    </div>





                    <div className="flex flex-col space-y-6 mt-10">
                        <div className="relative ">
                            {/* Main Image */}
                            <div className="relative z-10 -ml-1">
                                <img
                                    src="/images/fitness2.avif"
                                    alt="Restaurant Interior"
                                    className="w-[900px] h-[650px] object-cover shadow-xl brightness-70"
                                />

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
}
