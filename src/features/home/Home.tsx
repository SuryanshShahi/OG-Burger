import React from 'react';
import HeroSection from './sections/HeroSection';
import Unleash from './sections/Unleash';
import OriginalTaste from './sections/OriginalTaste';
import WideRange from './sections/WideRange';
import Guaranteed from './sections/Guaranteed';
import Testimonials from './sections/Testimonials';

const Home = () => {
  return (
    <div className='space-y-24 mb-24'>
      <HeroSection />
      <Unleash />
      <OriginalTaste />
      <WideRange />
      <Guaranteed />
      <Testimonials />
    </div>
  );
};

export default Home;
