import React from 'react';
import Hero from '../components/Hero';
import Luxury from '../components/Luxury';
import Holiday from '../components/Holiday';
import Essentials from '../components/Essentials';
import Rooms from '../components/Rooms';
import Booking from '../components/Booking';
import Activities from '../components/Activities';
import Stay from '../components/Stay';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div className="relative overflow-x-hidden">
        <Hero />
        <Luxury/>
        <Holiday/>
        <Essentials/>
        <Rooms/>
        <Booking/>
        <Activities/>
        <Stay/>
        <Footer/>

      </div> 
    </>

  );
}

export default Home;