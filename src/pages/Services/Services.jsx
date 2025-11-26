import Footer from "../../components/Footer";
import Amenities from "./Amenities";
import Discover from "./Discover";
import Hero from "./Hero";
import Stays from "./Stays";
import Testimonial from "./Testimonial";



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