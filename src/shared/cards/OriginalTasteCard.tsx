import React from 'react';

const OriginalTasteCard = ({
  count,
  title,
  description,
  rightAligned,
}: {
  count: string;
  title: string;
  description: string;
  rightAligned?: boolean;
}) => {
  return (
    <div className='relative max-w-[350px]'>
      <div
        className={`absolute text-[80px] font-BebasNeue text-gray-50 opacity-20 -top-14  ${
          rightAligned ? 'right-0' : 'left-0'
        }`}
      >
        {count}
      </div>
      <div className={`space-y-6 ${rightAligned ? 'text-end mr-9' : 'ml-12'}`}>
        <h4 className='text-2xl font-extrabold text-white'>{title}</h4>
        <p className='text-[#fafafa] font-medium'>{description}</p>
      </div>
    </div>
  );
};

export default OriginalTasteCard;
