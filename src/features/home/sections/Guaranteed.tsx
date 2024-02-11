import Img from '@/shared/Img';
import Heading from '@/shared/Modal/Heading';
import GuaranteeCard from '@/shared/cards/GuaranteeCard';
import React from 'react';

const Guaranteed = () => {
  const data = [
    { image: '/icons/delivery1.png', title: 'Delivery in 30 Mins' },
    {
      image: '/icons/fastFood.png',
      title: 'Free Delivery for orders above ₹500',
    },
    { image: '/icons/houseCity.png', title: 'Delivery on your doorstep' },
  ];
  return (
    <div className='bg-[#222] pt-24 px-5 relative'>
      <div className='flex container mx-auto relative'>
        <div className='bg-[url("/images/guaranteed.png")] lg:hidden bg-contain bg-no-repeat bg-bottom absolute h-full w-full z-[1] opacity-20'></div>
        <Img
          src='/images/guaranteed.png'
          alt='guaranteed'
          height={510}
          width={507}
          isLocal
          className='lg:max-h-[510px] lg:max-w-[507px] max-h-[410px] max-w-[407px] mt-auto lg:block hidden'
        />
        <div className='space-y-8 pb-24 my-auto sm:min-w-[400px] lg:text-start text-center z-[2]'>
          <Heading
            title='Guaranteed'
            subTitle='Your Favorite Burgers Delivered AT YOUR DOORSTEP'
            styleSubTitle='text-white lg:max-w-[478px] leading-[40px] '
          />
          <p className='text-white'>
            Craving a delicious burger? We guarantee hot, fresh burgers
            delivered to your door in under 30 minutes when you&apos;re within 5 km.
            Order now and satisfy your hunger quickly!
          </p>

          <div className='flex gap-5 xl:flex-nowrap flex-wrap lg:justify-between justify-center'>
            {data?.map((item: any, idx: number) => (
              <GuaranteeCard data={item} key={idx} />
            ))}
            <div className='bg-primary p-4 rounded-2xl flex flex-col justify-center text-white leading-[39px] space-y-2 w-full min-[1300px]:max-w-[164px] max-w-[180px] text-[28px] font-semibold'>
              Order Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guaranteed;
