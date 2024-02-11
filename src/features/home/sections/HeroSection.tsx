import Img from '@/shared/Img';
import React from 'react';

const HeroSection = () => {
  return (
    <div className='bg-primary font-BebasNeue text-white h-[calc(100vh-112px)] flex flex-col justify-center relative'>
      <Img
        src={'/icons/ogTag.png'}
        alt='phone'
        width={251}
        height={254}
        isLocal
        className='absolute -top-2 z-10'
      />

      <div className='max-w-[1200px] mx-auto w-full lg:px-5 relative'>
        <div>
          <div className='max-w-[416px] font-hyberBlaster'>
            <div className='text-[140px] leading-[140px]'>JOIN THE</div>
            <div className='text-[180px] leading-[120px]'>BURGER</div>
            <div className='text-[105px] leading-[106px]'>REVOLUTION</div>
          </div>
          <h4 className='text-[56px] leading-[56px] mt-[54px] font-BebasNeue'>
            COME FOR THE BURGERS, STAY FOR THE VIBE
          </h4>
        </div>
        <div className='absolute flex bottom-5 right-0 max-w-[780px]'>
          <Img
            src={'/images/burger1.png'}
            alt='phone'
            width={394}
            height={330}
            isLocal
            className='w-[394px] !h-[330px]'
          />
          <Img
            src={'/images/burger2.png'}
            alt='phone'
            width={370}
            height={356}
            isLocal
            className='w-[370px] h-[356px]'
          />
        </div>
      </div>
      <Img
        src={'/icons/white_bottom.png'}
        alt='phone'
        width={1440}
        height={85}
        isLocal
        className='w-full absolute bottom-0'
      />
      <Img
        src={'/images/fries.png'}
        alt='phone'
        width={172}
        height={597}
        isLocal
        className='absolute right-0 h-[597px]'
      />
    </div>
  );
};

export default HeroSection;
