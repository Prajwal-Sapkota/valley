import {
    FaUsers,
    FaVideo,
    FaMicrophone,
    FaChalkboardTeacher,
    FaGlassCheers,
    FaCamera,
    FaMusic,
    FaUtensils,
    FaChair,
    FaLightbulb,
    FaPalette,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function Amenities() {
    const services = [
        {
            id: 1,
            title: "Multi-purpose Hall",
            description: "Spacious indoor venue perfect for conferences, weddings, and large social events with flexible seating arrangements.",
            icon: FaUsers
        },
        {
            id: 2,
            title: "Board Meeting Room",
            description: "Intimate space for up to 20 persons, ideal for corporate meetings and executive discussions.",
            icon: FaChalkboardTeacher
        },
        {
            id: 3,
            title: "Modern Audiovisual",
            description: "State-of-the-art sound systems, projectors, and lighting for professional presentations and entertainment.",
            icon: FaVideo
        },
        {
            id: 4,
            title: "Sound Systems",
            description: "Professional audio equipment for speeches, announcements, and musical performances.",
            icon: FaMicrophone
        },
        {
            id: 5,
            title: "Conference Packages",
            description: "Tailored event packages including accommodation, meals, and meeting facilities.",
            icon: FaUtensils
        },
        {
            id: 6,
            title: "Banquet Setup",
            description: "Premium table settings, chair arrangements, and decorative elements for formal events.",
            icon: FaChair
        },
        {
            id: 7,
            title: "Stage & Lighting",
            description: "Custom stage setups with professional lighting for performances and ceremonies.",
            icon: FaLightbulb
        },
        {
            id: 8,
            title: "Wedding Decoration",
            description: "Complete floral arrangements, themed decorations, and venue styling for weddings.",
            icon: FaPalette
        },
        {
            id: 9,
            title: "Professional Photography",
            description: "Event photography and videography services to capture your special moments.",
            icon: FaCamera
        },
        {
            id: 10,
            title: "Entertainment",
            description: "Curated entertainment options including bands, DJs, and cultural performances.",
            icon: FaMusic
        },
        {
            id: 11,
            title: "Catering Services",
            description: "Gourmet catering with international and local cuisine, complete bar services.",
            icon: FaGlassCheers
        },
        {
            id: 12,
            title: "Event Planning",
            description: "Professional event management from planning to execution by our experienced team.",
            icon: FaMapMarkerAlt
        },
    ];

    return (
        <div className="w-full bg-white py-12 sm:py-16 md:py-18">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 text-black">
                {/* Title and text section */}
                <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12">
                    <span className="text-sm sm:text-md md:text-lg font-medium tracking-wider text-[#55694f]">
                        FACILITIES & SERVICES
                    </span>
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal uppercase py-4 sm:py-6 text-[#1b1c1b]">
                        EVENT FACILITIES & SERVICES
                    </h3>

                    <p className="text-sm sm:text-base md:text-lg font-normal text-gray-700 px-4">
                        Moonlit Resort offers comprehensive event solutions with modern facilities and professional
                        support for weddings, conferences, and social celebrations.
                    </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 py-2 sm:py-4">
                    {services.map((service) => {
                        const IconComponent = service.icon;
                        return (
                            <div key={service.id} className="flex items-start space-x-3 sm:space-x-4 bg-gray-100 px-4 sm:px-5 py-4 sm:py-5 rounded-lg hover:shadow-lg transition-shadow duration-300">
                                <IconComponent className="text-[#ba9f79] mt-1 flex-shrink-0" size={24} />
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-base sm:text-lg font-normal text-[#1b1c1b] mb-1 sm:mb-2 truncate">{service.title}</h3>
                                    <p className="text-xs sm:text-sm text-gray-600 font-normal leading-relaxed line-clamp-3">
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}