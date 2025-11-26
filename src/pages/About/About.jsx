import Footer from "../../components/Footer";
import Essentials from "./Essentials";
import Experience from "./Experience";
import Hero from "./Hero";
import Luxury from "./Luxury";
import Stay from "./Stay";


function About() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero />
        <Luxury/>
        <Experience/>
        <Essentials/>
        <Stay/>
        
        <Footer/>

      </div> 
    </>

  );
}

export default About;