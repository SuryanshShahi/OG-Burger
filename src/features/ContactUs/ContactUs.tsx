import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import Heading from '@/shared/Modal/Heading';
import MenuCard from '@/shared/cards/MenuCard';
import Tabs from '@/shared/cards/Tabs';
import UnleashCard from '@/shared/cards/UnleashCard';
import React, { useState } from 'react';

const ContactUs = () => {
  const data = [
    {
      icon: '/icons/badge.png',
      title: 'Proven Success:',
      description:
        'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
    },
    {
      icon: '/icons/servingDish.png',
      title: 'Unique and Delicious Menu',
      description:
        'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
    },
    {
      icon: '/icons/servingDish.png',
      title: 'Comprehensive Training and Support:',
      description:
        'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
    },
    {
      icon: '/icons/servingDish.png',
      title: 'Operational Efficiency:',
      description:
        'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
    },
    {
      icon: '/icons/servingDish.png',
      title: 'Marketing',
      description:
        'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
    },
    {
      icon: '/icons/servingDish.png',
      title: 'Branding',
      description:
        'totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto',
    },
  ];
  const plans = [
    {
      title: 'THE OG Kiosk',
      image: '/images/unleash1.png',
      tag: 'Malls, Office, Food Courts, Metro',
      specs: [
        { icon: '/icons/area.png', value: '100-300 sq. ft.' },
        { icon: '/icons/price.png', value: 'Franchise fees 3 Lakhs' },
        { icon: '/icons/rupee.png', value: 'No Royalty' },
        { icon: '/icons/time.png', value: '18-21 Month ROI' },
        { icon: '/icons/people.png', value: 'Takeaway / Delivery' },
      ],
    },
    {
      title: 'THE CLASSIC OG',
      image: '/images/unleash1.png',
      tag: 'High Street, Malls, Buainess Huba',
      specs: [
        { icon: '/icons/area.png', value: '400-800 sq. ft.' },
        { icon: '/icons/price.png', value: 'Franchise fees 5 Lakhs' },
        { icon: '/icons/rupee.png', value: '3% Royalty' },
        { icon: '/icons/time.png', value: '18-21 Month ROI' },
        { icon: '/icons/people.png', value: 'Seating Capacity : 20-40' },
      ],
    },
    {
      title: 'THE PREMIUM OG',
      image: '/images/unleash1.png',
      tag: 'Large Malls, High Street, Crowded Places',
      specs: [
        { icon: '/icons/area.png', value: '1000-1500 sq. ft.' },
        { icon: '/icons/price.png', value: 'Franchise fees 5 Lakhs' },
        { icon: '/icons/rupee.png', value: '3% Royalty' },
        { icon: '/icons/time.png', value: '18-21 Month ROI' },
        { icon: '/icons/people.png', value: 'Seating Capacity : 40-60' },
      ],
    },
  ];
  return (
    <div>
      <div className='relative bg-[url("/images/contactBg.png")] h-[320px] bg-cover flex justify-center items-center'>
        <div className='h-[320px] w-full bg-[rgb(0,0,0,0.3)] absolute'></div>
        <div className='text-white sm:text-[58px] text-4xl font-bold z-10'>
          Join the OG Family
        </div>
        <Img
          src={'/icons/white_bottom.png'}
          alt='phone'
          width={1440}
          height={85}
          isLocal
          className='w-full absolute bottom-0'
        />
      </div>

      <div className='container mx-auto space-y-24 px-5 my-16'>
        <div className='space-y-16'>
          <Heading
            title='Join the Burger Revolution'
            subTitle='UNLEASH THE INNER og foodie!'
            className='text-center'
          />

          <div className='grid md:grid-cols-2 gap-10 justify-center'>
            {data?.map((item: any, idx: number) => (
              <UnleashCard
                data={item}
                key={idx}
                className='!flex-row gap-x-4'
              />
            ))}
          </div>
        </div>

        <div className='flex flex-wrap gap-10 justify-center xl:justify-between'>
          {plans?.map((item: any, idx: number) => (
            <div
              className='p-8 rounded-b-lg rounded-t-xl  space-y-8 shadow-cardShadow border-t-2 border-t-primary'
              key={idx}
            >
              <div className='text-5xl leading-[48px] font-BebasNeue'>
                THE PREMIUM OG
              </div>
              <Img
                src={'/images/unleash1.png'}
                alt='phone'
                width={317}
                height={175}
                isLocal
                className='rounded-2xl max-h-[175px] w-full'
              />
              <div className='text-xs'>
                Set-Up Starts{' '}
                <span className='text-[32px] leading-6 font-bold'>₹1Cr</span>
              </div>
              <div className='py-[6px] !mt-4 px-3 rounded-r-full text-white text-sm text-end bg-[linear-gradient(90deg,rgba(0,0,0,0.00)_1.41%,#000_23.26%)]'>
                Large Malls, High Street, Crowded Places
              </div>
              <div className='space-y-4'>
                <div className='font-bold'>What you get</div>
                {item?.specs?.map((item1: any, idx1: number) => (
                  <div className='flex items-center gap-x-4' key={idx1}>
                    <Img
                      src={item1?.icon}
                      alt='specs'
                      width={24}
                      height={24}
                      isLocal
                    />
                    <div>{item1?.value}</div>
                  </div>
                ))}
              </div>
              <Button className='font-semibold bg-primary hover:!bg-primary/80 flex items-center gap-x-2 h-12 rounded-3xl px-6'>
                <div className='h-5 w-5 bg-white rounded-full flex items-center justify-center'>
                  <Img
                    src='/icons/arrowDiagonal.png'
                    alt='phone'
                    width={16}
                    height={16}
                    isLocal
                  />
                </div>
                Enquire Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
