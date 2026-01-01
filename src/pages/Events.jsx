import Footer from "../components/Footer";
import Amenities from "./Events/Amenities";
import Discover from "./Events/Discover";
import EventsGallery from "./Events/EventsGallery";
import Hero from "./Events/Hero";




function Events() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero/>
        <Amenities/>
        <EventsGallery/>
        <Discover/>
       
        <Footer/>

      </div> 
    </>

  );
}

export default Events;