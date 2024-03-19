import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useNavbar from "./views/useNavbar";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({
  className,
  btnClass,
}: {
  className?: string;
  btnClass?: string;
}) => {
  const router = useRouter();
  const { isActive } = useNavbar();
  const navItems = [
    { name: "HOME", link: "/" },
    { name: "MENU", link: "/menu" },
    { name: "FRANCHISE", link: "/contact" },
    { name: "CONTACT US", link: "#footer" },
  ];
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <div
        id="navbar"
        className={`bg-primary px-4 h-24 top-0 sticky z-20 duration-500 flex items-center text-white ${className}`}
      >
        <div className="flex justify-between items-center container mx-auto w-full">
          <Img
            src={
              router?.pathname === "/menu" ||
              router?.pathname === "/contact" ||
              isActive
                ? "/icons/logoRed.png"
                : "/icons/logo.png"
            }
            isLocal
            alt="phone"
            width={71}
            height={77}
            className="cursor-pointer"
            onClick={() => router.push("/")}
          />
          <GiHamburgerMenu
            className={`lg:hidden ${isActive ? "text-black" : ""}`}
            size={24}
            onClick={() => setSidebar(!sidebar)}
          />
          <div className="gap-x-[56px] lg:flex text-2xl hidden leading-6 items-center">
            {navItems?.map((item, idx) => (
              <div
                key={idx}
                className="font-oswald mt-1 cursor-pointer"
                onClick={() => router.push(item?.link)}
              >
                {item?.name}
              </div>
            ))}
            <Button className={isActive ? "bg-primary text-white" : btnClass}>
              Order Online
            </Button>
          </div>
        </div>
      </div>
      {sidebar && (
        <div
          className="bg-[rgb(0,0,0,0.6)] absolute h-full w-screen top-0 z-[999]"
          onClick={() => setSidebar(false)}
        />
      )}
      {sidebar && (
        <div
          className="bg-white h-screen w-[300px] space-y-6 py-2 px-4 fixed top-0"
          id="sideBar"
        >
          <Img
            src={"/icons/logoRed.png"}
            isLocal
            alt="phone"
            width={71}
            height={77}
            className="cursor-pointer"
            onClick={() => {
              router.push("/");
              setSidebar(false);
            }}
          />
          <div
            onClick={() => setSidebar(false)}
            className="absolute text-black text-4xl right-3 -top-3"
          >
            &times;
          </div>
          <div className={`space-y-5 font-extrabold mr-5`}>
            {navItems?.map((item, idx) => (
              <div
                key={idx}
                className="font-oswald mt-1 cursor-pointer"
                onClick={() => {
                  router.push(item?.link);
                  setSidebar(false);
                }}
              >
                {item?.name}
              </div>
            ))}
          </div>
          <Button className="w-full">Order Online</Button>
        </div>
      )}
    </>
  );
};

export default Navbar;
