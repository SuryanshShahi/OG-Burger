import React from "react";
import Img from "../Img";

const MenuCard = ({
  data,
  isNonVeg,
}: {
  data: { title: string; description: string; price: number };
  isNonVeg: boolean;
}) => {
  return (
    <div className="flex gap-x-5 font-prompt max-w-[564px] justify-between">
      <div className="space-y-2">
        <Img
          src={isNonVeg ? "/icons/nonVeg.png" : "/icons/veg.png"}
          isLocal
          alt="veg"
          height={16}
          width={16}
        />
        <div className="text-[18px] font-semibold">{data?.title}</div>
        <div className="font-medium">₹ {data?.price}</div>
        <p className="text-xs text-gray-600">{data?.description}</p>
      </div>
      <Img
        src={`/images/menuItems/${data?.title}.png`}
        alt={data?.title}
        height={130}
        width={130}
        className="rounded-2xl h-[130px] w-[130px] object-cover object-center"
      />
    </div>
  );
};

export default MenuCard;
