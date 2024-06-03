import Img from "@/shared/Img";
import Heading from "@/shared/Modal/Heading";
import UnleashCard from "@/shared/cards/UnleashCard";
import React from "react";
import { motion } from "framer-motion";
import { OgVariants } from "@/utils/framerVarients";
const Testimonials = () => {
  const stats = [
    { title: "YEARS OF EXPERIENCE", value: "10+" },
    { title: "SATISFACTION RATE", value: "100%" },
    { title: "SPECIAL FLAVOURS", value: "15+" },
  ];
  const data = [
    {
      title: "Burger Bliss Beyond Compare!",
      description:
        "At The OG Burger, the burger game is taken to a whole new level. You won't find a more delightful, tasty, and soul-satisfying experience anywhere else.",
      authorImage: "/icons/author1.png",
      author: "Rajvir Verma",
      rating: [1, 1, 1, 1, 1],
    },
    {
      title: "FLAVORFUL FIESTA",
      description:
        "The OG Burger: Where every bite's an adventure into the world of pitawiches, mocktails, and mouthwatering burgers, all in a cozy, dreamy ambiance!",
      authorImage: "/icons/author2.png",
      author: "Sarabjeet Singh",
      rating: [1, 1, 1, 1, 1],
    },
    {
      title: "Menu Magic Unleashed",
      description:
        "The OG Burger isn't just about burgers; it's a symphony of flavors where pitawiches, mocktails, waffles, pizzas, and mesmerizing atmosphere",
      authorImage: "/icons/author3.png",
      author: "Aisha Jain",
      rating: [1, 1, 1, 1, 1],
    },
  ];
  return (
    <div className="container mx-auto space-y-10 px-5">
      <Heading
        title="Feedback"
        subTitle="WHAT OUR CUSTOMERS SAY"
        className="text-center"
      />
      <div className="flex justify-between font-oswald max-w-[670px] mx-auto">
        {stats?.map((item: any, idx: number) => (
          <UnleashCard data={item} key={idx} styleTitle="!text-base text-center"/>
        ))}
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-10 place-items-center">
        {data?.map((item: any, idx: number) => (
          <motion.div
            viewport={{ once: true }}
            variants={OgVariants.CONTAINER}
            whileInView="show"
            initial="hidden"
            key={idx}
            className="p-6 rounded-2xl h-full shadow-cardShadow space-y-6 relative"
          >
            <Img
              src={"/icons/quotes.png"}
              isLocal
              alt="phone"
              width={60}
              height={53}
              className="absolute right-0 top-0"
            />
            <div className="space-y-1">
              <div className="text-2xl leading-6 font-oswald">
                {item?.title}
              </div>
              <div className="flex gap-x-2">
                {item?.rating?.map((e: number, idx1: number) => (
                  <Img
                    src={"/icons/star.png"}
                    isLocal
                    alt="phone"
                    width={16}
                    height={16}
                    key={idx1}
                  />
                ))}
              </div>
            </div>
            <p className="leading-6 font-prompt text-gray-600">
              {item?.description}
            </p>
            <div className="h-[1px] bg-[#F3F4F6]"></div>
            <div className="flex gap-x-3 items-center">
              <Img
                src={item?.authorImage}
                alt="phone"
                width={38}
                height={38}
                className="rounded-full"
                isLocal
              />
              <div className="font-bold leading-4 font-prompt">
                {item?.author}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
