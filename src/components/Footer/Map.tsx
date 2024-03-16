import React from "react";
import { FaStar } from "react-icons/fa";

const Map = () => {
  return (
    <div className="md:flex items-end">
      <div className="md:absolute bg-white mx-[10px] mb-16 rounded-3xl md:p-6 p-4 md:space-y-8 space-y-4 max-w-[732px]">
        <div className="md:text-5xl text-3xl uppercase font-BebasNeue md:leading-[48px]">
          Get in touch with us
        </div>
        <div className="h-[1px] bg-gray-100" />
        <div className="grid md:grid-cols-2 md:gap-12 gap-6">
          <div className="space-y-4">
            <div className="md:text-2xl text-xl font-BebasNeue">
              Contact INFO
            </div>
            <div className="space-y-6">
              <div className="md:space-y-2">
                <div className="md:text-lg font-bold">Our Address</div>
                <p className="font-medium lg:text-base text-sm">
                  CB4, DLF Cybercity, DLF Phase 2, Sector 24, Gurugram, Haryana
                  122022
                </p>
              </div>
              <div className="md:space-y-2">
                <div className="md:text-lg font-bold">Email Us At</div>
                <p className="font-medium lg:text-base text-sm">
                  contact@theogburger.co.in
                </p>
              </div>
              <div className="font-BebasNeue md:text-2xl text-xl">
                <div className="leading-6">FRANCHISE INQUIRY</div>
                <p className="text-[#4B5563]">098219 23920</p>
              </div>
            </div>
          </div>
          <div className="space-y-11">
            <div className="md:text-2xl text-xl font-BebasNeue">
              Opening Hours
            </div>
            <div className="gap-8 flex items-center !mt-4">
              <div className="md:space-y-2">
                <div className="md:text-lg font-bold">Monday - Saturday</div>
                <p className="font-medium lg:text-base text-sm">
                  10 AM - 11 PM
                </p>
              </div>
              <div className="md:space-y-2">
                <div className="md:text-lg font-bold">Sunday</div>
                <p className="font-medium lg:text-base text-sm">
                  11 AM - 12 PM
                </p>
              </div>
            </div>
            <div className="md:text-2xl text-xl space-y-4">
              <div className="font-BebasNeue">CUSTOMER RATINGS</div>
              <div className="md:space-y-2">
                <div className="flex gap-x-2 items-center">
                  {[1, 1, 1, 1, 1]?.map((item, idx) => (
                    <FaStar color="#ffc106" key={idx} size={20} />
                  ))}
                  <div className="font-BebasNeue ml-4 leading-6 mt-[6px]">
                    4.8 / 5.0
                  </div>
                </div>
                <p className="text-gray-600 font-medium text-xs">
                  By 2000+ happy customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.533032747993!2d77.08575007560476!3d28.493606490375722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b164d7ff3a3%3A0x693dbe0ab69b783e!2sDesign%20Krunch!5e0!3m2!1sen!2sin!4v1710383729422!5m2!1sen!2sin"
        width="100%"
        className="md:h-[700px] h-[400px]"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
