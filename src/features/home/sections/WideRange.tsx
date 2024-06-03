import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import Heading from "@/shared/Modal/Heading";
import { motion } from "framer-motion";
import { OgVariants } from "@/utils/framerVarients";
import { useRouter } from "next/router";
import React from "react";

const WideRange = () => {
  const data = [
    {
      title: "Burger Bliss",
      description:
        "Dive into perfection with our gourmet burgers—crafted with love and premium ingredients",
      image: "/images/Menu/Burgers/Paneer%20Burgers/Paneer%20Tikka.jpg",
      slug: "Burgers",
    },
    {
      title: "Fry Heaven",
      description:
        "Dive into fry perfection! Crispy fries paired with an array of sauces—crave for more.",
      image: "/images/Menu/Appetizers/Fries/Cheese%20Loaded%20Fries.jpg",
      slug: "Appetizers",
    },
    {
      title: "Wrap It Up",
      description:
        "Bursting with fresh, vibrant ingredients, our wraps are a delicious blend of health & taste.",
      image: "/images/Menu/Wraps/Veg%20Wraps/BBQ%20Paneer.jpg",
      slug: "Wraps",
    },
    {
      title: "Pasta Paradise",
      description:
        "Experience pasta perfection—every bite, a journey through the heart of Italy.",
      image: "/images/Menu/Pastas/Veg%20Pasta/Pomodoro%20Veg.jpg",
      slug: "Pastas",
    },
    {
      title: "Pizza Pleasures",
      description:
        "Savor artisanal pizzas, handpicked ingredients, baked to perfection for an authentic taste.",
      image: "/images/Menu/Pizzas/Non%20Veg%20Pizza/Chicken%20&%20Peppers.jpg",
      slug: "Pizzas",
    },
    {
      title: "Waffle Wonderland",
      description:
        "Elevate your sweet tooth with scrumptious waffles—symphony of taste and texture.",
      image: "/images/Menu/Desserts/Waffles/Brownie%20Waffle.jpg",
      slug: "Desserts",
    },
    {
      title: "Beverage Bonanza",
      description:
        "Quench your thirst with refreshing mocktails, shakes, aromatic coffee, and soothing teas.",
      image: "/images/Menu/Beverages/Mocktails/Watermelon%20Mojito.jpg",
      slug: "Beverages",
    },
    {
      title: "Sweet Endings",
      description:
        " Indulge sweet cravings—heavenly cheesecakes, fluffy pancakes with a touch of sweetness.",
      image: "/images/Menu/Desserts/Cheesecakes/Caramel%20Cheese%20Cake.jpg",
      slug: "Desserts",
    },
  ];
  const router = useRouter();
  return (
    <div className="max-w-[1160px] px-5 mx-auto space-y-12">
      <Heading
        title="Menu"
        subTitle="EXPLORE THE WIDE RANGE OF DISHES"
        className="text-center"
      />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 place-items-center gap-y-16 gap-x-10">
        {data?.map((item: any, idx: number) => (
          <motion.div
            viewport={{ once: true }}
            variants={OgVariants.CONTAINER}
            whileInView="show"
            initial="hidden"
            className="rounded-[20px] h-full cursor-pointer shadow-cardShadow max-w-[276px] w-full"
            key={idx}
            onClick={() => router.push(`/menu?item=${item?.slug}`)}
          >
            <Img
              src={item?.image}
              alt={item?.image}
              width={270}
              height={151}
              className="rounded-t-[20px] w-full"
            />
            <div className="p-4 space-y-2">
              <div className="text-[28px] font-semibold font-oswald leading-10">
                {item?.title}
              </div>
              <p className="text-sm leading-[22px] text-[#4B5563] font-prompt">
                {item?.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-10">
        <Button className="font-semibold bg-primary hover:!bg-primary/80 flex items-center gap-x-2 h-12 rounded-3xl px-6">
          <div className="h-5 w-5 bg-white rounded-full flex items-center justify-center">
            <Img
              src="/icons/arrowDiagonal.png"
              isLocal
              alt="phone"
              width={16}
              height={16}
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
