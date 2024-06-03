import Img from "@/shared/Img";
import { FaStar } from "react-icons/fa";
import OrderByPhone from "./orderByPhone";
import Link from "next/link";

const Map = () => {
  const details = [
    {
      icon: "/icons/map.png",
      label: "Our Address",
      value: "21, Opp, Huda Park Rd, Patel Nagar, Bhiwani, Haryana 127021",
      action:
        "map:21, Opp, Huda Park Rd, Patel Nagar, Bhiwani, Haryana 127021",
    },
    {
      icon: "/icons/call.png",
      label: "Call us at",
      value: "+91 70111 61527",
      action: "tel:+91 70111 61527",
    },
    {
      icon: "/icons/sms.png",
      label: "Email Us At",
      value: "contact@theogburger.co.in",
      action: "mailto:contact@theogburger.co.in",
    },
  ];
  return (
    <div className="md:flex items-end">
      <div className="md:absolute bg-white mx-[10px] mb-16 rounded-3xl md:p-6 p-4 md:space-y-8 space-y-4 max-w-[732px]">
        <div className="md:text-5xl text-3xl font-oswald md:leading-[48px] uppercase">
          Get in touch with us
        </div>
        <OrderByPhone />
        <div className="h-[1px] bg-[#F3F4F6]" />
        <div className="grid md:grid-cols-2 md:gap-12 gap-6">
          <div className="space-y-4">
            <div className="md:text-2xl text-xl font-oswald">Contact INFO</div>
            <div className="space-y-6 font-prompt">
              {details?.map((item, idx) => (
                <Link href={item?.action} className="flex gap-x-2" key={idx}>
                  <Img
                    alt=""
                    height={32}
                    width={32}
                    src={item?.icon}
                    isLocal
                    className="h-8 w-8"
                  />
                  <div className="md:space-y-2">
                    <div className="md:text-lg font-bold">{item?.label}</div>
                    <p className="font-medium lg:text-base text-sm">
                      {item?.value}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-11">
            <div className="md:text-2xl text-xl font-oswald">Opening Hours</div>
            <div className="gap-8 flex items-center font-prompt !mt-4">
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
              <div className="font-oswald">CUSTOMER RATINGS</div>
              <div className="md:space-y-2">
                <div className="flex gap-x-2 items-center">
                  {[1, 1, 1, 1, 1]?.map((_, idx) => (
                    <FaStar color="#ffc106" key={idx} size={20} />
                  ))}
                  <div className="font-oswald ml-4 leading-6 mt-[6px]">
                    4.8 / 5.0
                  </div>
                </div>
                <p className="text-gray-600 font-prompt font-medium text-xs">
                  By 2000+ happy customers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.1807045517385!2d76.13494827561439!3d28.80368837628746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912678854954893%3A0xbb76eb019cc6170b!2sTHE%20OG%20BURGER!5e0!3m2!1sen!2sin!4v1710659489917!5m2!1sen!2sin"
        width="100%"
        className="md:h-[700px] h-[400px]"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Map;
