import React from 'react';
import HeroSection from './sections/HeroSection';
import Unleash from './sections/Unleash';
import OriginalTaste from './sections/OriginalTaste';
import WideRange from './sections/WideRange';
import Guaranteed from './sections/Guaranteed';
import Testimonials from './sections/Testimonials';
import InstagramEmbed from 'react-instagram-embed';

const Home = () => {
  return (
    <div className='space-y-24'>
      <HeroSection />
      <Unleash />
      <OriginalTaste />
      <WideRange />
      <Guaranteed />
      <Testimonials />
      <div className='bg-red-400'>
        <InstagramEmbed
          url='https://instagr.am/p/Zn1Xz/'
          clientAccessToken='123|456'
          maxWidth={320}
          hideCaption={false}
          containerTagName='div'
          protocol=''
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
      </div>
    </div>
  );
};

export default Home;
