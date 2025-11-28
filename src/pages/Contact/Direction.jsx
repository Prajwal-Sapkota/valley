export default function Direction() {
  const backgroundImageUrl = "/images/contact5.avif";

  return (
    <div>
      {/* Direction Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-black text-center mb-10 relative">

        {/* Vertical Divider */}
        <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-[#ba9d75]"></div>

        {/* Column 1 */}
        <div className="flex flex-col space-y-3 leading-relaxed items-center px-6">
          <h5 className="text-md font-semibold text-[#ba9d75] uppercase">General Inquiries</h5>
          <h3 className="text-2xl font-medium">Hotel Info Center</h3>
          <h1>Business Hours: Monday – Sunday, 9 am – 5 pm</h1>
          <h1>Telephone: +41 22 345 66 77</h1>
          <h1>Fax: +41 22 345 77 89</h1>
          <h1>Email: info@cozystay.com</h1>
          <button id="discover" className="mt-4 font-light underline decoration-[#ba9d75] underline-offset-8 hover:no-underline transition-all duration-300">
            Get Directions
          </button>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-3 leading-relaxed items-center px-6">
          <h5 className="text-md font-semibold text-[#ba9d75] uppercase">Reservation Details</h5>
          <h3 className="text-2xl font-medium">Direct Reservations</h3>
          <h1>Address: Rue de Lausanne, 1202 Genève, Switzerland</h1>
          <h1>Telephone: +41 22 345 66 77</h1>
          <h1>Fax: +41 22 345 77 89</h1>
          <h1>Email: booking@cozystay.com</h1>
          <button id="discover" className="mt-4 font-light underline decoration-[#ba9d75] underline-offset-8 hover:no-underline transition-all duration-300">
            Get Directions
          </button>
        </div>

      </div>

      {/* Full Cover Image with Gradient */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <img
          src={backgroundImageUrl}
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-transparent to-black/0"></div>
      </div>
    </div>
  );
}
