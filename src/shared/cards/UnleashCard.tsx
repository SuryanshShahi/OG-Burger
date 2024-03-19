import React from "react";
import Img from "../Img";

const UnleashCard = ({
  data,
  className,
}: {
  data: any;
  className?: string;
}) => {
  return (
    <div className={`flex flex-col font-prompt gap-y-2 ${className}`}>
      {data?.icon && (
        <div className="sm:min-h-16 sm:min-w-16 min-h-12 min-w-12 mx-auto w-fit h-fit rounded-full bg-red-50 flex justify-center items-center">
          <Img
            src={data?.icon}
            alt="phone"
            width={38}
            height={38}
            isLocal
            className="sm:w-[38px] sm:h-[38px] w-6 h-6"
          />
        </div>
      )}
      {data?.value && (
        <div className="text-primary text-[42px] leading-[42px] text-center">
          {data?.value}
        </div>
      )}
      <div>
        <div className="text-xl leading-5">{data?.title}</div>
        {data?.description && (
          <p className="leading-6 text-gray-600 mt-2">{data?.description}</p>
        )}
      </div>
    </div>
  );
};

export default UnleashCard;
