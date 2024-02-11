import Img from '@/shared/Img';
import Heading from '@/shared/Modal/Heading';
import UnleashCard from '@/shared/cards/UnleashCard';
import React from 'react';
const Testimonials = () => {
  const stats = [
    { title: 'YEARS OF EXPERIENCE', value: '10+' },
    { title: 'SATISFACTION RATE', value: '100%' },
    { title: 'SPECIAL FLAVOURS', value: '15+' },
  ];
  const data = [
    {
      title: 'Burger Bliss Beyond Compare!',
      description:
        "At The OG Burger, the burger game is taken to a whole new level. You won't find a more delightful, tasty, and soul-satisfying experience anywhere else.",
      authorImage: '/icons/author.png',
      author: 'Nikhil Tyagi',
      rating: [1, 1, 1, 1, 1],
    },
    {
      title: 'FLAVORFUL FIESTA',
      description:
        "The OG Burger: Where every bite's an adventure into the world of pitawiches, mocktails, and mouthwatering burgers, all in a cozy, dreamy ambiance!",
      authorImage: '/icons/author.png',
      author: 'Sarabjeet Singh',
      rating: [1, 1, 1, 1],
    },
    {
      title: 'Menu Magic Unleashed',
      description:
        "The OG Burger isn't just about burgers; it's a symphony of flavors where pitawiches, mocktails, waffles, pizzas, and mesmerizing atmosphere",
      authorImage: '/icons/author.png',
      author: 'Aisha Jain',
      rating: [1, 1, 1, 1, 1],
    },
  ];
  return (
    <div className='container mx-auto space-y-10 px-5'>
      <Heading
        title='Feedback'
        subTitle='WHAT OUR CUSTOMERS SAY'
        className='text-center'
        styleSubTitle='-mt-7'
      />
      <div className='flex justify-between font-BebasNeue max-w-[670px] mx-auto'>
        {stats?.map((item: any, idx: number) => (
          <UnleashCard data={item} key={idx} />
        ))}
      </div>
      <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-10 place-items-center'>
        {data?.map((item: any, idx: number) => (
          <div
            key={idx}
            className='p-6 rounded-2xl shadow-cardShadow space-y-6 relative'
          >
            <Img
              src={'/icons/quotes.png'}
              alt='phone'
              width={60}
              height={53}
              isLocal
              className='absolute right-0 top-0'
            />
            <div className='space-y-1'>
              <div className='text-2xl leading-6 font-BebasNeue'>
                {item?.title}
              </div>
              <div className='flex gap-x-2'>
                {item?.rating?.map((e: number, idx1: number) => (
                  <Img
                    src={'/icons/star.png'}
                    alt='phone'
                    width={16}
                    height={16}
                    isLocal
                    key={idx1}
                  />
                ))}
              </div>
            </div>
            <p className='leading-6 text-gray-600'>{item?.description}</p>
            <div className='h-[1px] bg-[#F3F4F6]'></div>
            <div className='flex gap-x-3 items-center'>
              <Img
                src={item?.authorImage}
                alt='phone'
                width={38}
                height={38}
                isLocal
                className='rounded-full'
              />
              <div className='font-bold leading-4'>{item?.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
