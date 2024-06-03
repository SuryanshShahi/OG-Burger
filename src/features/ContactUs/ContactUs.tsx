import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import Heading from "@/shared/Modal/Heading";
import Modal from "@/shared/Modal/Modal";
import UnleashCard from "@/shared/cards/UnleashCard";
import useScrollHidden from "@/utils/hooks/useScrollHidden";
import React, { useState } from "react";
import useContactUs from "./useContactUs";
import { errorType, touchedType, inputType } from "@/utils/Functions";
import { OgVariants } from "@/utils/framerVarients";
import { motion } from "framer-motion";
import { sourcePrefix } from "@/utils/constant";
const ContactUs = () => {
  const [isActive, setIsActive] = useState("");
  useScrollHidden(isActive?.length > 0);
  const InputFields = [
    {
      label: "Name",
      placeholder: "Enter Your Name",
      icon: "/icons/message.png",
      type: "text",
    },
    {
      label: "State",
      placeholder: "Enter State",
      icon: "/icons/message.png",
      type: "text",
    },
    {
      label: "Email ID",
      placeholder: "Enter Your Email ID",
      icon: "/icons/message.png",
      type: "email",
    },
  ];

  const data = [
    {
      icon: "/icons/badge.png",
      title: "Proven Success:",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    },
    {
      icon: "/icons/servingDish.png",
      title: "Unique and Delicious Menu",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    },
    {
      icon: "/icons/servingDish.png",
      title: "Comprehensive Training and Support:",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    },
    {
      icon: "/icons/servingDish.png",
      title: "Operational Efficiency:",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    },
    {
      icon: "/icons/servingDish.png",
      title: "Marketing",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    },
    {
      icon: "/icons/servingDish.png",
      title: "Branding",
      description:
        "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto",
    },
  ];
  const plans = [
    {
      title: "THE OG Kiosk",
      image: "/images/franchise1.png",
      tag: "Malls, Office, Food Courts, Metro",
      price: "10lacs",
      specs: [
        { icon: "/icons/area.png", value: "100-300 sq. ft." },
        { icon: "/icons/price.png", value: "Franchise fees 3 Lakhs" },
        { icon: "/icons/rupee.png", value: "No Royalty" },
        { icon: "/icons/time.png", value: "18-21 Month ROI" },
        { icon: "/icons/people.png", value: "Takeaway / Delivery" },
      ],
    },
    {
      title: "THE CLASSIC OG",
      image: "/images/franchise2.png",
      tag: "High Street, Malls, Business Hubs",
      price: "18lacs",
      specs: [
        { icon: "/icons/area.png", value: "400-800 sq. ft." },
        { icon: "/icons/price.png", value: "Franchise fees 5 Lakhs" },
        { icon: "/icons/rupee.png", value: "3% Royalty" },
        { icon: "/icons/time.png", value: "18-21 Month ROI" },
        { icon: "/icons/people.png", value: "Seating Capacity : 20-40" },
      ],
    },
    {
      title: "THE PREMIUM OG",
      image: "/images/franchise3.png",
      tag: "Large Malls, High Street, Crowded Places",
      price: "1Cr",
      specs: [
        { icon: "/icons/area.png", value: "1000-1500 sq. ft." },
        { icon: "/icons/price.png", value: "Franchise fees 5 Lakhs" },
        { icon: "/icons/rupee.png", value: "3% Royalty" },
        { icon: "/icons/time.png", value: "18-21 Month ROI" },
        { icon: "/icons/people.png", value: "Seating Capacity : 40-60" },
      ],
    },
  ];
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    setFieldValue,
    handleChange,
  } = useContactUs();
  return (
    <div>
      <div
        className="relative h-[320px] bg-cover flex justify-center items-center"
        style={{
          backgroundImage: `url('${sourcePrefix}/images/contactBg.png')`,
        }}
      >
        <div className="h-[320px] w-full bg-[rgb(0,0,0,0.3)] absolute"></div>
        <div className="text-white text-center font-prompt sm:text-[58px] text-4xl font-bold z-10">
          Join the OG Family
        </div>
        <Img
          src={"/icons/white_bottom.png"}
          isLocal
          alt="phone"
          width={1440}
          height={85}
          className="w-full absolute bottom-0"
        />
      </div>

      <div className="container mx-auto space-y-24 px-5 my-16">
        <motion.div
          viewport={{ once: true }}
          variants={OgVariants.CONTAINER}
          whileInView="show"
          initial="hidden"
          className="space-y-16"
        >
          <Heading
            title="Join the Burger Revolution"
            subTitle="UNLEASH THE INNER og foodie!"
            className="text-center"
          />

          <div className="grid md:grid-cols-2 gap-10 justify-center">
            {data?.map((item: any, idx: number) => (
              <UnleashCard
                data={item}
                key={idx}
                styleTitle="text-start"
                className="!flex-row gap-x-4"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          viewport={{ once: true }}
          variants={OgVariants.CONTAINER}
          whileInView="show"
          initial="hidden"
          className="flex flex-wrap gap-10 justify-center font-prompt xl:justify-between"
        >
          {plans?.map((item: any, idx: number) => (
            <div
              className="p-8 rounded-b-lg duration-500 rounded-t-xl space-y-8 shadow-cardShadow border-t-2 border-t-primary"
              key={idx}
            >
              <div className="text-5xl leading-[48px] font-oswald">
                {item?.title}
              </div>
              <Img
                src={item?.image}
                alt="phone"
                width={317}
                height={175}
                className="rounded-2xl max-h-[175px] w-full"
              />
              <div className="text-xs">
                Set-Up Starts{" "}
                <span className="text-[32px] leading-6 font-bold">
                  ₹{item?.price}
                </span>
              </div>
              <div className="py-[6px] !mt-4 px-3 rounded-r-full text-white text-sm text-end bg-[linear-gradient(90deg,rgba(0,0,0,0.00)_1.41%,#000_23.26%)]">
                Large Malls, High Street, Crowded Places
              </div>
              <div className="space-y-4">
                <div className="font-bold">What you get</div>
                {item?.specs?.map((item1: any, idx1: number) => (
                  <div className="flex items-center gap-x-4" key={idx1}>
                    <Img
                      src={item1?.icon}
                      alt="specs"
                      width={24}
                      height={24}
                      isLocal
                    />
                    <div>{item1?.value}</div>
                  </div>
                ))}
              </div>
              <Button
                onClick={() => {
                  setIsActive(item?.title);
                  setFieldValue("category", item?.title);
                }}
                className="font-semibold bg-primary hover:!bg-primary/80 flex items-center gap-x-2 h-12 rounded-3xl px-6"
              >
                <div className="h-5 w-5 bg-white rounded-full flex items-center justify-center">
                  <Img
                    src="/icons/arrowDiagonal.png"
                    isLocal
                    alt="phone"
                    width={16}
                    height={16}
                  />
                </div>
                Enquire Now
              </Button>
            </div>
          ))}
        </motion.div>
      </div>
      {isActive && (
        <Modal
          onClose={() => setIsActive("")}
          className="space-y-6 max-w-[621px] relative"
        >
          <div className="text-[28px] font-semibold">Franchise Inquiry</div>
          <div
            className="!absolute text-2xl -top-3 right-4 cursor-pointer"
            onClick={() => setIsActive("")}
          >
            &times;
          </div>
          <p className="text-[#374151]">
            Fill this form to get a call back from one of our
            <b> franchise</b> agents and start your journey with the OG Burger
          </p>
          <div className="grid md:grid-cols-2 gap-x-6">
            {InputFields?.map((item: any, idx: number) => (
              <div className="space-y-1" key={idx}>
                <h4 className="text-xs font-medium">
                  {item?.label} <span className="text-red-600">*</span>
                </h4>
                <div className="relative">
                  <input
                    type={item?.type}
                    placeholder={item?.placeholder}
                    className={`h-10 rounded-md text-sm pl-10 outline-none w-full border ${
                      errorType(idx, errors) && touchedType(idx, touched)
                        ? "border-red-600"
                        : "border-gray-200"
                    }`}
                    onChange={handleChange(
                      idx === 0 ? "name" : idx === 1 ? "state" : "email"
                    )}
                    onBlur={handleBlur(
                      idx === 0 ? "name" : idx === 1 ? "state" : "email"
                    )}
                    value={inputType(idx, values)}
                  />
                  {errorType(idx, errors) && touchedType(idx, touched) ? (
                    <p className="text-red-500 text-[10px] text-right">
                      {errorType(idx, errors) || (
                        <p className="text-white text-[10px] text-right">.</p>
                      )}
                    </p>
                  ) : (
                    <p className="text-white text-[10px] text-right">.</p>
                  )}
                  <Img
                    src={item?.icon}
                    height={16}
                    width={16}
                    alt="heroImage"
                    className="absolute top-3 left-4"
                    isLocal
                  />
                </div>
              </div>
            ))}{" "}
            <div className="space-y-1">
              <h4 className="text-xs font-medium">
                Category <span className="text-red-600">*</span>
              </h4>
              <div className="relative">
                <select
                  className={`h-10 rounded-md text-start text-sm pl-10 outline-none w-full border ${
                    errors?.category && touched?.category
                      ? "border-red-600"
                      : "border-gray-200"
                  }`}
                  onChange={handleChange("category")}
                  onBlur={handleBlur}
                  value={values?.category}
                >
                  <option>THE OG Kiosk</option>
                  <option>THE CLASSIC OG</option>
                  <option>THE PREMIUM OG</option>
                </select>
                {errors?.category && touched?.category ? (
                  <p className="text-red-500 text-[10px] text-right">
                    {errors?.category || (
                      <p className="text-white text-[10px] opacity-0 text-right">
                        .
                      </p>
                    )}
                  </p>
                ) : (
                  <p className="text-white text-[10px] text-right">.</p>
                )}
                <Img
                  src="/icons/filter.png"
                  height={16}
                  width={16}
                  alt="heroImage"
                  className="absolute top-[14px] left-4"
                  isLocal
                />
              </div>
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            className="w-full bg-red-600 !rounded hover:!bg-primary/80"
          >
            Submit Franchise
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default ContactUs;
