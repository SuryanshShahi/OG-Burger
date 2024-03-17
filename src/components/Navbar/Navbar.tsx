import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import { useRouter } from "next/router";
import React from "react";
import useNavbar from "./views/useNavbar";

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
  return (
    <div
      id="navbar"
      className={`bg-primary px-4 h-24 top-0 sticky z-20 duration-500 flex items-center text-white ${className}`}
    >
      <div className="flex justify-between items-center max-w-[1200px] mx-auto w-full">
        <Img
          src={
            router?.pathname === "/menu" ||
            router?.pathname === "/contact" ||
            isActive
              ? "/icons/logoRed.png"
              : "/icons/logo.png"
          }
          alt="phone"
          width={71}
          height={77}
          className="cursor-pointer"
          onClick={() => router.push("/")}
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
  );
};

export default Navbar;
