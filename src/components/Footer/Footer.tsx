import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import Modal from "@/shared/Modal/Modal";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Map from "./Map";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const socials = [
    "/icons/fb.png",
    "/icons/youtube.png",
    "/icons/insta.png",
    "/icons/twitter.png",
    "/icons/linkedIn.png",
  ];

  const router = useRouter();
  return (
    <div id="footer">
      <Map />

      <div className="bg-[#03060E] px-5 pt-16 text-[#F9FAFB]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid grid-cols-12 sm:gap-10 gap-y-10">
            <div className="lg:col-span-10 sm:col-span-8 col-span-12 order-1">
              <Img
                src={"/icons/logoRed.png"}
                isLocal
                height={105}
                width={95}
                alt="heroImage"
              />
              <p className="font-medium mt-4 font-prompt text-[#fafafa]">
                Welcome to The OG Burger, where tradition meets innovation in
                the world of burgers. Our passion lies in preserving the
                timeless flavors of classic burgers while constantly pushing the
                boundaries of culinary creativity.
              </p>
            </div>
            <div className="list-none space-y-3 font-prompt lg:col-span-2 sm:col-span-4 col-span-6 order-2">
              <div className="text-primary text-2xl mb-4 font-oswald">
                Explore
              </div>
              {["Home", "About Us", "Menu", "Franchise", "Contact us"]?.map(
                (item: any, idx: number) => (
                  <li
                    key={idx}
                    // onClick={() => router.push(item?.url)}
                    className="navItems w-fit cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </div>
            {/* <div className="list-none space-y-3 lg:col-span-4 sm:col-span-8 col-span-12 sm:order-3 order-4">
              <div className="text-primary text-2xl mb-4 font-oswald">
                Contact Us
              </div>
              <div className="space-y-4 font-prompt">
                <div>
                  <div className="text-lg font-oswald">Address</div>
                  <p className="font-medium text-[#fafafa]">
                    21, Opp, Huda Park Rd, Patel Nagar, Bhiwani, Haryana 127021
                  </p>
                </div>
                <div>
                  <div className="text-lg font-oswald">Phone</div>
                  <p className="font-medium text-[#fafafa]">+91 70111 61527</p>
                </div>
                <div>
                  <div className="text-lg font-oswald">Email</div>
                  <p className="font-medium text-[#fafafa]">
                    contact@theogburger.co.in
                  </p>
                </div>
              </div>
            </div> */}
            {/* <div className="list-none space-y-3 lg:col-span-2 sm:col-span-4 col-span-6 sm:order-4 order-3">
              <div className="text-primary text-2xl mb-4 font-oswald">
                Opening Hours
              </div>
              <div className="space-y-4 font-prompt">
                <div>
                  <div className="text-lg font-oswald">Monday - Saturday</div>
                  <p className="font-medium text-[#fafafa]">10 AM - 11 PM</p>
                </div>
                <div>
                  <div className="text-lg font-oswald">Sunday</div>
                  <p className="font-medium text-[#fafafa]">11 AM - 12 PM</p>
                </div>
              </div>
            </div> */}
          </div>
          <div className="flex font-prompt sm:flex-row font-medium text-gray-300 flex-col sm:justify-between items-center gap-y-4 py-10">
            <div className="">
              Copyright © 2024 The OG Burger. All rights reserved
            </div>
            {/* <div className="gap-x-2 flex items-center">
              <div>Disclaimer</div>
              <div className="w-[1px] h-3 bg-white" />
              <div>Privacy Policy</div>
              <div className="w-[1px] h-3 bg-white" />
              <div>Terms Of Use</div>
            </div> */}
            <div className="flex gap-x-3">
              {socials?.map((item, idx) => (
                <div
                  className="h-[32px] cursor-pointer hover:rotate-[360deg] duration-500 flex items-center justify-center w-[32px] rounded-full bg-[#222]"
                  key={idx}
                >
                  <Img src={item} height={16} width={16} alt="heroImage" isLocal/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
