import React from 'react';
import Img from '../Img';

const Tabs = ({
  data,
  className,
  onClick,
}: {
  data: any;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      onClick={onClick}
      className={`shadow border duration-500 cursor-pointer border-gray-100 w-fit rounded-lg px-4 py-1 flex items-center gap-x-2 ${className}`}
    >
      <Img
        src={data?.image}
        alt='veg'
        height={26}
        width={34}
        isLocal
        className='max-h-[26px] max-w-[50px] object-contain'
      />
      <div className='text-xl font-BebasNeue leading-5 mt-1'>{data?.title}</div>
    </div>
  );
};

export default Tabs;
