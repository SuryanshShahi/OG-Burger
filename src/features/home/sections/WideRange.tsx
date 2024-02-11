import Button from '@/shared/Button/Button';
import Img from '@/shared/Img';
import Heading from '@/shared/Modal/Heading';
import React from 'react';

const WideRange = () => {
  const data = [
    {
      title: 'BURGER',
      description: 'Veg, Egg, Paneer, Chicken, We have it All!',
      amount: 35,
      image: '/images/burger.png',
      width: 145,
      height: 131,
      className: '-left-36 -bottom-16',
    },
    {
      title: 'BURGER',
      description: 'Veg, Egg, Paneer, Chicken, We have it All!',
      amount: 35,
      image: '/images/fries1.png',
      width: 197,
      height: 131,
      className: '-left-[170px] -bottom-16',
    },
    {
      title: 'BURGER',
      description: 'Veg, Egg, Paneer, Chicken, We have it All!',
      amount: 35,
      image: '/images/waffels.png',
      width: 158,
      height: 131,
      className: '-left-[150px] -bottom-[75px]',
    },
    {
      title: 'BURGER',
      description: 'Veg, Egg, Paneer, Chicken, We have it All!',
      amount: 35,
      image: '/images/tortilla.png',
      width: 218,
      height: 131,
      className: '-left-[130px] -bottom-16',
    },
    {
      title: 'BURGER',
      description: 'Veg, Egg, Paneer, Chicken, We have it All!',
      amount: 35,
      image: '/images/pizza.png',
      width: 126,
      height: 131,
      className: '-left-[124px] -bottom-16',
    },
    {
      title: 'BURGER',
      description: 'Veg, Egg, Paneer, Chicken, We have it All!',
      amount: 35,
      image: '/images/juice.png',
      width: 111,
      height: 131,
      className: '-left-[90px] -bottom-[74px]',
    },
  ];
  return (
    <div className='max-w-[1160px] px-5 mx-auto space-y-12'>
      <Heading
        title='Menu'
        subTitle='EXPLORE THE WIDE RANGE OF DISHES'
        className='text-center'
        styleSubTitle='-mt-7'
      />
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 place-items-center gap-y-16 gap-x-32'>
        {data?.map((item: any, idx: number) => (
          <div
            className='rounded-[20px] bg-[linear-gradient(124deg,#4A4847_0.1%,#000_99.91%)] py-6 px-12 text-white'
            key={idx}
          >
            <div className='relative'>
              <div className='font-BebasNeue text-[31px]'>{item?.title}</div>
              <div>{item?.description}</div>
              <div className='mt-[30px] flex items-center gap-x-2 text-[#ECA400] ml-2'>
                <div className=''>starting at</div>
                <div className='text-[47px] font-BebasNeue'>
                  ₹{item?.amount}/-
                </div>
              </div>
              <Img
                src={item?.image}
                alt='phone'
                width={item?.width}
                height={item?.height}
                isLocal
                className={`absolute ${item?.className}`}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex sm:flex-row flex-col items-center justify-center gap-10'>
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
          Order Online
        </Button>
        <Button className='font-semibold !bg-[#121212] hover:!bg-[#121212]/80 flex items-center gap-x-2 h-12 rounded-3xl px-6'>
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

export default WideRange;
