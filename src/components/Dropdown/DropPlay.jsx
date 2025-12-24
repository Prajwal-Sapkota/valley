export default function DropPlay() {

  return (
    <div className="w-full bg-black py-10 border-y border-emerald-700/50">
      <div className="max-w-7xl mx-auto px-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 ">
          
          <div className="grid grid-cols-2 gap-8 h-fit px-2">
            
            <div className="space-y-6 text-left">
              <span className="text-md font-semibold ">JUNGLE EXPERIENCES</span>
              <div  className="space-y-2 text-sm py-4 ">
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Overview</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Chitwan Park Adventures</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Cultural Activities</a>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <span className="text-md font-semibold mb-4">JUNGLE ADVENTURES</span>
              <div  className="space-y-2 text-sm py-4">
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Elephant Ride</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Jeep Safari</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Canoeing</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Jungle Walk</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Village Tour</a>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <span className="text-md font-semibold mb-4">WELLNESS & SPA</span>
              <div  className="space-y-2 text-sm py-4 ">
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Luxury Spa Treatments</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Steam & Sauna</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Jacuzzi</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Ice Bath Therapy</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Yoga & Meditation</a>
              </div>
            </div>

            <div className="space-y-2 text-left">
              <span className="text-md font-semibold mb-4 mt-6">EVENTS</span>
              <div  className="space-y-2 text-sm py-4 ">
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Destination Weddings</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">MICE Events</a>
              </div>
            </div>

          </div>

          <div className="space-y-8 ">
            <div className="grid grid-cols-2 gap-6 ml-10 ">

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden h-96 mb-4">
                  <img
                    src="/images/chitwan.avif"
                    alt="Chitwan National Park Safari"
                    className="w-96 h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                    <span className="text-md text-white">Adventure</span>

                    <a className="text-xl  text-white">CHITWAN SAFARI</a>
                    <div className="space-y-1 text-white/90">
                      <span className="text-sm">Elephant rides, jeep safaris & jungle walks in Chitwan National Park.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden h-96 mb-4">
                  <img
                    src="/images/cultural.jpg"
                    alt="Tharu Cultural Experience"
                    className="w-96 h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                    <span className="text-md  text-white">Cultural</span>

                    <a className="text-xl  text-white">THARU CULTURE</a>
                    <div className="space-y-1 text-white/90">
                      <span className="text-sm">Traditional Tharu dance shows & local heritage experiences.</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}