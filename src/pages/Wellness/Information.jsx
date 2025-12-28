import { FaClock } from "react-icons/fa";

export default function Information() {

    return (
        <div className="w-full bg-white pt-24">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                {/* MOONLIT WELLNESS SANCTUARY SECTION */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* LEFT IMAGE */}
                    <div className="flex flex-col space-y-6">
                        <div className="relative">
                            <div className="relative z-10 ml-2">
                                <img
                                    src="/images/sanctuary.avif"
                                    alt="Moonlit Wellness Sanctuary at Moonlit Resort"
                                    className="w-[900px] h-[650px] object-cover shadow-xl brightness-70"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT TEXT SECTION */}
                    <div className="flex flex-col space-y-6 py-4 ml-10">
                        <span className="text-left text-md md:text-lg font-medium text-[#55694f] uppercase">
                            WELLNESS & REJUVENATION
                        </span>

                        <h3 className="text-left text-4xl md:text-5xl font-normal text-[#1b1c1b] uppercase py-4">
                            TAILORED WELLNESS EXPERIENCES
                        </h3>

                        <p className="text-left text-sm md:text-lg font-normal">
                            Discover holistic wellness at our thoughtfully designed facilities, created for rejuvenation and wellness tourism. Indulge in premium spa treatments, steam and sauna experiences, jacuzzi relaxation, and invigorating ice bath therapy.                        </p>

                        <p className="text-left text-sm md:text-lg font-normal">
                            Perfect for wellness tourism guests, retreat groups, and individual travelers seeking restoration. Ideal for individual relaxation, wellness retreats, and corporate rejuvenation programs in our peaceful natural setting near Chitwan National Park.
                        </p>

                        <div className="text-left space-y-2 text-black py-4">
                            <h1 className="text-2xl font-normal">Wellness Center Hours</h1>
                            <div className="flex items-center gap-2 mt-4 font-normal">
                                <FaClock className="text-[#ba9d75]" />
                                <span>Daily: 7:00 am - 10:00 pm</span>
                            </div>
                        </div>

                        <button className="bg-[#ba9d75] text-white border border-[#ba9d78] w-64 py-3 font-normal hover:bg-[#ab916c]">
                            Book Wellness Session
                        </button>
                    </div>

                </div>

            </div>
        </div>
    );
}