import Footer from "../components/Footer";
import Hero from "./Wellness/Hero";
import Information from "./Wellness/Information";
import Journey from "./Wellness/Journey";
import Pool from "./Wellness/Pool";
import Reservation from "./Wellness/Reservation";



function Wellness() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero/>
        <Reservation/>
        <Journey/>
       <Information/>
       <Pool/>
        
        
        <Footer/>

      </div> 
    </>

  );
}

export default Wellness;