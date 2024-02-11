import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import MenuCard from '@/shared/cards/MenuCard';
import Tabs from '@/shared/cards/Tabs';
import React, { useState } from 'react';

const OurMenu = () => {
  const menu = [
    {
      title: '',
    },
  ];
  const navTabs = [
    {
      title: 'Burger',
      image: '/images/burgerForMenu.png',
    },
    {
      title: 'Appetizers',
      image: '/images/appetizers.png',
    },
    {
      title: 'WRAPS',
      image: '/images/tortilla.png',
    },
    {
      title: 'PIZZA',
      image: '/images/pizza.png',
    },
    {
      title: 'PASTA',
      image: '/images/pasta.png',
    },
    {
      title: 'DESSERTS',
      image: '/images/desserts.png',
    },
    {
      title: 'SANDWICHes',
      image: '/images/sandwich.png',
    },
    {
      title: 'WRAPS',
      image: '/images/tortilla.png',
    },
  ];
  const [isActive, setIsActive] = useState(0);
  return (
    <div>
      <div className='relative bg-[url("/images/ourMenu.png")] h-[320px] bg-cover flex justify-center items-center'>
        <div className='h-[320px] w-full bg-[rgb(0,0,0,0.2)] absolute'></div>
        <div className='text-white text-[58px] font-bold z-10'>Our Menu</div>
        <Img
          src={'/icons/white_bottom.png'}
          alt='phone'
          width={1440}
          height={85}
          isLocal
          className='w-full absolute bottom-0'
        />
      </div>

      <div className='container mx-auto py-24 px-5'>
        <div className='flex xl:justify-center gap-x-6 overflow-x-scroll mb-10 p-2'>
          {navTabs?.map((item: any, idx: number) => (
            <Tabs
              data={item}
              key={idx}
              onClick={() => setIsActive(idx)}
              className={
                isActive === idx ? 'bg-primary text-white border-primary' : ''
              }
            />
          ))}
        </div>
        <div className='md:space-y-8 space-y-12 lg:columns-2 place-items-center'>
          <div className='flex flex-col items-center'>
            <div className='md:space-y-5 space-y-8'>
              <div className='text-[32px] font-BebasNeue self-start mb-8 leading-8'>
                VEG BURGERS
              </div>
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='md:space-y-5 space-y-8'>
              <div className='text-[32px] font-BebasNeue self-start mb-8 leading-8'>
                CHICKEN BURGERS
              </div>
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='md:space-y-5 space-y-8'>
              <div className='text-[32px] font-BebasNeue self-start mb-8 leading-8'>
                PANEER BURGERS
              </div>
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </div>
          </div>
          <div className='flex flex-col items-center'>
            <div className='md:space-y-5 space-y-8'>
              <div className='text-[32px] font-BebasNeue self-start mb-8 leading-8'>
                EGG BURGERS
              </div>
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
              <MenuCard />
            </div>
          </div>
        </div>
        <Button className='font-semibold !bg-[#121212] hover:!bg-[#121212]/80 flex items-center gap-x-2 h-12 rounded-3xl px-6 mx-auto mt-10'>
          <Img
            src='/icons/dineIn.png'
            alt='phone'
            width={18}
            height={18}
            isLocal
          />
          See Dine-In Menu
        </Button>
      </div>
    </div>
  );
};

export default OurMenu;
