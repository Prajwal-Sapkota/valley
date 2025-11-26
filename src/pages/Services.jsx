import Footer from "../components/Footer";
import Amenities from "./Services/Amenities";
import Discover from "./Services/Discover";
import Hero from "./Services/Hero";
import Stays from "./Services/Stays";
import Testimonial from "./Services/Testimonial";



function Services() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero/>
        <Amenities/>
        <Stays/>
        <Discover/>
        <Testimonial/>
       
        <Footer/>

      </div> 
    </>

  );
}

export default Services;