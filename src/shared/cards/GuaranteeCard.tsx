import React from "react";
import Img from "../Img";

const GuaranteeCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-white p-4 rounded-2xl space-y-2 max-w-[180px]">
      <Img src={data?.image} alt={data?.image} height={32} width={32} isLocal/>
      <div className="font-bold">{data?.title}</div>
    </div>
  );
};

export default GuaranteeCard;
