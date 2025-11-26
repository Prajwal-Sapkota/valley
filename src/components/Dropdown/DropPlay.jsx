export default function DropPlay() {

  return (
    <div className="w-full bg-black py-10">
      <div className="max-w-7xl mx-auto px-8 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div className="grid grid-cols-2 gap-8 h-fit -ml-10 mr-20">
            
            <div className="space-y-2">
              <h4 className="text-md font-semibold mb-4">LOCAL ACTIVITIES</h4>
              <div id="overview" className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Overview</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Winter Activities</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Summer Activities</a>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-md font-semibold mb-4">SUMMER ACTIVITIES</h4>
              <div id="summer" className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Hiking</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Running & Walking</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Mountain Bike</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Racing Bike</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Golf Courses</a>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-md font-semibold mb-4">WINTER ACTIVITIES</h4>
              <div id="winter" className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Ski & Snowboard</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Freeriding</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Winter Hiking</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Snowshoeing</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Paraglider Exercises</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Sledding</a>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-md font-semibold mb-4 mt-6">OTHERS</h4>
              <div id="others" className="space-y-2 text-sm">
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Art & Museum</a>
                <a href="#" className="block hover:text-[#b99d75] cursor-pointer">Music</a>
              </div>
            </div>

          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6 ml-10">

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden h-96 mb-4">
                  <img
                    src="/images/mountain.avif"
                    alt="Winter Activities"
                    className="w-96 h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                    <h1 className="text-md font-bold text-white">Adventure</h1>

                    <h1 className="text-xl font-bold text-white">WINTER ACTIVITIES</h1>
                    <div className="space-y-1 text-white/90">
                      <h1 className="text-sm">Aenean commodo ligula eget dolor.</h1>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group cursor-pointer">
                <div className="relative overflow-hidden h-96 mb-4">
                  <img
                    src="/images/lakeview.avif"
                    alt="Summer Activities"
                    className="w-96 h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:bg-black/30"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                    <h1 className="text-md font-bold text-white">Nature & Wild</h1>

                    <h1 className="text-xl font-bold text-white">SUMMER ACTIVITIES</h1>
                    <div className="space-y-1 text-white/90">
                      <h1 className="text-sm">Aenean commodo ligula eget dolor.</h1>
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
