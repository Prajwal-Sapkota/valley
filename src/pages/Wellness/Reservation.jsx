import { MdCall } from "react-icons/md";

export default function Reservation() {

    return (
        <div className="w-full bg-white py-18">
            <div className="max-w-[1400px] mx-auto px-8 text-black">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">


                    <div className="flex flex-col space-y-8 py-12">

                        <span className="text-left text-md md:text-lg font-medium text-[#55694f] uppercase ">
                            Wellness & Rejuvenation Sanctuary
                        </span>

                        <h3 className="text-left text-4xl md:text-5xl font-normal text-[#1b1c1b]  uppercase">
                            Moonlit Wellness Sanctuary
                        </h3>
                        <p className="text-left text-sm md:text-lg font-normal">Rejuvenate your body, mind, and soul at our renowned wellness facilities, thoughtfully designed for complete relaxation and holistic wellness. Our wellness sanctuary features luxury spa treatments, steam & sauna, jacuzzi, and ice bath therapy - all designed for holistic rejuvenation and wellness tourism. Perfect for individual relaxation, wellness retreats, and corporate rejuvenation programs. Experience true restoration in our peaceful natural setting near Chitwan National Park.</p>
                        <div className="flex items-start gap-6">
                            <MdCall className="text-5xl text-[#ba9d75] mt-1" />
                            <div className="space-y-2 text-left">
                                <span className="text-left text-sm font-medium text-[#ba9d75] uppercase tracking-widest">
                                    RESERVATION BY PHONE
                                </span>
                                <h1
                                    className="  text-2xl sm:text-3xl font-normal text-black hover:text-[#ba9d75] transition-colors duration-300 number"
                                >
                                    +977 9804161233
                                </h1>
                            </div>
                        </div>


                    </div>
                    <div className="flex flex-col space-y-6">


                        <div className="relative hidden lg:block">
                            {/* Main Image */}
                            <div className="relative z-10 ml-2">
                                <img
                                    src="/images/spa2.jpg"
                                    alt="Luxury Spa Treatment at Moonlit Resort"
                                    className="w-[350px] h-[500px] object-cover shadow-xl brightness-70"
                                />

                            </div>


                            {/* Overlapping Image */}
                            <div className="absolute -bottom-20 -right-15 z-20 w-2/3">
                                <img
                                    src="/images/wellness.webp"
                                    alt="Moonlit Wellness Facilities"
                                    className="w-[350px] h-[500px] object-cover shadow-xl"
                                />
                            </div>
                        </div>

                        {/* Mobile / Tablet Layout → No overlap */}
                        <div className="flex flex-col gap-6 lg:hidden">
                            <img
                                src="/images/spa2.jpg"
                                alt="Luxury Spa Treatment at Moonlit Resort"
                                className="w-full h-[400px] object-cover shadow-xl"
                            />
                            <img
                                src="/images/wellness.webp"
                                alt="Moonlit Wellness Facilities"
                                className="w-full h-[400px] object-cover shadow-xl"
                            />
                        </div>

                    </div>


                </div>

            </div>
        </div>
    );
}