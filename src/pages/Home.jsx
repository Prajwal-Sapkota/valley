import React from 'react';
import Hero from '../components/Hero';
import Rooms from '../components/Rooms';
import Booking from '../components/Booking';
import Stay from '../components/Stay';
import Footer from '../components/Footer';
import Events from '../components/Events';
import Welcome from '../components/Welcome';
import Adventure from '../components/Adventure';
import Facilities from '../components/Facilities';

function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero />
        <Welcome/>
        <Adventure/>
        <Facilities/>
        <Rooms/>
        <Booking/>
        <Events/>
        <Stay/>
        <Footer/>

      </div> 
    </>

  );
}

export default Home;