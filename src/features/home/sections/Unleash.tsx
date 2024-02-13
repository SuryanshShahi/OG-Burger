import Img from '@/shared/Img';
import Heading from '@/shared/Modal/Heading';
import UnleashCard from '@/shared/cards/UnleashCard';
import React from 'react';

const Unleash = () => {
  const data = [
    { icon: '/icons/badge.png', title: 'Premium Quality' },
    { icon: '/icons/servingDish.png', title: 'Variety of Dishes' },
    { icon: '/icons/delivery.png', title: 'Fastest Delivery' },
  ];
  return (
    <div className='lg:grid grid-cols-2 mx-auto place-items-center container gap-14'>
      <Heading
        title='Join the Burger Revolution'
        subTitle='UNLEASH THE INNER og foodie!'
        className='lg:hidden text-center mb-8'
      />
      <div className='flex sm:flex-row flex-col max-[640px]:justify-between gap-6 justify-center'>
        <Img
          src={'/images/unleash1.png'}
          alt='phone'
          width={336}
          height={376}
          isLocal
          className='sm:max-w-[336px] max-h-[376px] sm:w-fit w-full'
        />
        <div className='flex sm:flex-col justify-between gap-6'>
          <Img
            src={'/images/unleash2.png'}
            alt='phone'
            width={212}
            height={176}
            isLocal
            className='max-w-[212px] max-h-[176px]'
          />
          <div className='bg-primary max-h-[176px] max-w-[212px] w-full sm:h-full flex justify-center items-center rounded-lg'>
            <Img
              src={'/icons/logo.png'}
              alt='phone'
              width={120}
              height={130}
              isLocal
            />
          </div>
        </div>
      </div>
      <div className='space-y-6 max-w-[630px] mx-auto'>
        <Heading
          title='Join the Burger Revolution'
          subTitle='UNLEASH THE INNER og foodie!'
          className='lg:block hidden'
        />
        <p className='font-medium text-gray-600 leading-[25px]'>
          Welcome to The OG Burger, where tradition meets innovation in the
          world of burgers. Our passion lies in preserving the timeless flavors
          of classic burgers while constantly pushing the boundaries of culinary
          creativity. Join us on a journey where every bite is a nod to the past
          and a taste of the extraordinary.
        </p>
        <div className='flex flex-wrap gap-10 justify-center'>
          {data?.map((item: any, idx: number) => (
            <UnleashCard data={item} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Unleash;
