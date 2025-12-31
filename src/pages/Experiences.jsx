import Footer from "../components/Footer";
import Activities from "./Experiences/Activities";

import Hero from "./Experiences/Hero";
import Images from "./Experiences/Images";


function Experiences() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero/>
        <Activities/>
        <Images/>
        
        
        <Footer/>

      </div> 
    </>

  );
}

export default Experiences;