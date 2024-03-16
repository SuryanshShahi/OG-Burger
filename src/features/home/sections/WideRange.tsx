import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import Heading from "@/shared/Modal/Heading";
import { MENU_DATA } from "@/utils/MenuItems";
import { useRouter } from "next/router";
import React from "react";

const WideRange = () => {
  const data = [
    {
      title: "BURGER",
      description: "Veg, Egg, Paneer, Chicken, We have it All!",
      image: "/images/rosaVeg.png",
    },
    {
      title: "BURGER",
      description: "Veg, Egg, Paneer, Chicken, We have it All!",
      image: "/images/rosaVeg.png",
    },
    {
      title: "BURGER",
      description: "Veg, Egg, Paneer, Chicken, We have it All!",
      image: "/images/rosaVeg.png",
    },
    {
      title: "BURGER",
      description: "Veg, Egg, Paneer, Chicken, We have it All!",
      image: "/images/rosaVeg.png",
    },
    {
      title: "BURGER",
      description: "Veg, Egg, Paneer, Chicken, We have it All!",
      image: "/images/rosaVeg.png",
    },
    {
      title: "BURGER",
      description: "Veg, Egg, Paneer, Chicken, We have it All!",
      image: "/images/rosaVeg.png",
    },
  ];
  const router = useRouter();
  return (
    <div className="max-w-[1160px] px-5 mx-auto space-y-12">
      <Heading
        title="Menu"
        subTitle="EXPLORE THE WIDE RANGE OF DISHES"
        className="text-center"
        styleSubTitle="-mt-7"
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-y-16 gap-x-10">
        {MENU_DATA["Veg Burger & Paneer Burger"][2]?.varients?.map(
          (item: any, idx: number) => (
            <div
              className="rounded-[20px] shadow-cardShadow max-w-[276px] w-full"
              key={idx}
            >
              <Img
                src={`/images/menuItems/${item?.title}.png`}
                alt={item?.image}
                width={270}
                height={151}
                isLocal
                className="rounded-t-[20px] w-full"
              />
              <div className="p-4 space-y-2">
                <div className="text-[28px] font-semibold">{item?.title}</div>
                <p className="text-sm leading-[22px]">{item?.description}</p>
              </div>
            </div>
          )
        )}
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-10">
        <Button className="font-semibold bg-primary hover:!bg-primary/80 flex items-center gap-x-2 h-12 rounded-3xl px-6">
          <div className="h-5 w-5 bg-white rounded-full flex items-center justify-center">
            <Img
              src="/icons/arrowDiagonal.png"
              alt="phone"
              width={16}
              height={16}
              isLocal
            />
          </div>
          Order Online
        </Button>
        <Button
          onClick={() => router.push("/menu")}
          className="font-semibold !bg-[#121212] hover:!bg-[#121212]/80 flex items-center gap-x-2 h-12 rounded-3xl px-6"
        >
          <Img
            src="/icons/dineIn.png"
            alt="phone"
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
