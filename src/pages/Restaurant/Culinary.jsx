import { MdCall } from "react-icons/md";

export default function Culinary() {
    return (
        <div className="w-full bg-white py-12">
            <div className="max-w-[1400px] mx-auto px-8 text-black">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    
                    {/* Left Column */}
                    <div className=" text-left space-y-12 py-8">
                        
                        {/* Text Block */}
                        <div className="space-y-4">
                            <span className=" text-md lg:text-lg font-medium text-[#55694f] uppercase tracking-widest">
                                MOONLIT DINING EXPERIENCE
                            </span>
                            <h3 className="text-4xl md:text-5xl font-normal text-[#1b1c1b] leading-tight py-4">
                                ALL-DAY DINING & POOL BAR
                            </h3>
                            <p className=" text-lg text-gray-600 leading-relaxed font-normal">
                                Enjoy a diverse menu of international cuisines curated by our experienced chefs, paired with a wide selection of beverages. Unwind by our outdoor swimming pool with refreshing cocktails, mocktails, and light snacks in a scenic open-air setting. Experience culinary excellence in both indoor and outdoor seating options, offering beautiful views of our lush gardens and tranquil streams.
                            </p>
                        </div>

                        {/* Contact Section */}
                        <div className="flex items-start gap-6">
                            <MdCall className="text-5xl text-[#ba9d75] mt-1" />
                            <div className="space-y-2">
                                <span className=" text-left text-sm font-normal text-[#ba9d75] uppercase tracking-widest">
                                    RESERVATION BY PHONE
                                </span>
                                <h1
                                    className=" text-left text-2xl sm:text-3xl font-normal text-black hover:text-[#ba9d75] transition-colors duration-300 number"
                                >
                                    +977 9804161233
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Images */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        
                        {/* Image 1 */}
                        <div className="relative group h-[500px] overflow-hidden cursor-pointer">
                            <img 
                                src="/images/res3.avif"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110 border border-[#ba9d75]"
                            />

                            {/* Overlay With Opacity */}
                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-all duration-700"></div>

                            {/* Inner Border */}
                            <div className="absolute inset-2 border border-[#ba9d75] opacity-70"></div>

                            {/* Menu Text Inside */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white mb-2">
                                <span className="text-3xl font-normal tracking-wide">
                                    Menu
                                </span>
                            </div>
                        </div>

                        {/* Image 2 */}
                        <div className="relative group h-[500px] overflow-hidden cursor-pointer">
                            <img 
                                src="/images/res4.avif"
                                className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-30 transition-all duration-700"></div>

                            {/* Inner Gold Border */}
                            <div className="absolute inset-2 border border-[#ba9d75] opacity-70"></div>

                            {/* Wine List Inside */}
                            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center text-white mb-2">
                                <span className="text-3xl font-light tracking-wide font-normal">
                                    Beverage List
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}