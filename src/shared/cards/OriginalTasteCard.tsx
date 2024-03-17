import React from "react";

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
    <div className="relative max-w-[350px]">
      <div
        className={`absolute text-[80px] font-monoton text-primary opacity-20 -top-14  ${
          rightAligned ? "right-0" : "left-0"
        }`}
      >
        {count}
      </div>
      <div
        className={`space-y-6 ${rightAligned ? "text-end mr-14" : "ml-[58px]"}`}
      >
        <h4 className="md:text-[28px] text-2xl font-extrabold font-oswald text-white">
          {title}
        </h4>
        <p className="text-[#fafafa] font-medium font-prompt">{description}</p>
      </div>
    </div>
  );
};

export default OriginalTasteCard;
