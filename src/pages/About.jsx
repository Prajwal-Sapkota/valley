import Footer from "../components/Footer";
import Essentials from "./About/Essentials";
import Experience from "./About/Experience";
import Hero from "./About/Hero";
import Luxury from "./About/Luxury";
import Stay from "./About/Stay";


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