import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import HireUs from './components/HireUs/HireUs';
import Services from './components/Services/Services';
// import Testimonials from './components/Testimonial/Testimonials';
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HireUs />
      <Services />
      {/* <Testimonials/> */}
    </>
  );
}

export default App;
