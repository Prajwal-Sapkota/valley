import Footer from "../components/Footer";
import Explore from "./Local Activities/Explore";

import Hero from "./Local Activities/Hero";
import Images from "./Local Activities/Images";


function Activities() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero/>
        <Explore/>
        <Images/>
        
        
        <Footer/>

      </div> 
    </>

  );
}

export default Activities;