import React from 'react';
import Img from '../Img';

const MenuCard = () => {
  return (
    <div className='flex gap-x-5 max-w-[564px]'>
      <div className='space-y-2'>
        <Img src='/icons/veg.png' alt='veg' height={16} width={16} isLocal />
        <div className='text-[18px] font-semibold'>Paneer Tikka Burger</div>
        <div className='font-medium'>₹ 279</div>
        <p className='text-xs text-gray-600'>
          Our signature pizza crust loaded with Classic Mozzarella Cheese +
          Cheddar Cheese + Onion + Green Bell Pepper
        </p>
      </div>
      <Img
        src='/images/unleash1.png'
        alt='veg'
        height={130}
        width={130}
        isLocal
        className='rounded-2xl'
      />
    </div>
  );
};

export default MenuCard;
