import React from 'react';
import About from '../../container/About';
import Footer from '../../container/Footer';
import Header from '../../container/Header';
import Skills from '../../container/Skills';
import Testimonial from '../../container/Testimonial';
import Work from '../../container/Work';
import Navbar from '../Navbar';

function Routing() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Routing;
