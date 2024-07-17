import Button from "@/shared/Button/Button";
import Img from "@/shared/Img";
import Link from "next/link";
import { useRouter } from "next/router";

const OrderByPhone = () => {
  const router = useRouter();
  return (
    <div className="flex items-center gap-x-8">
      <div className="flex items-center gap-x-5">
        <Img
          alt=""
          height={56}
          width={56}
          src="/icons/call-bell.png"
          isLocal
          className="h-14 w-14"
        />
        <div>
          <div className="font-medium">Order by Phone</div>
          <Link
            href="tel:98219 23920"
            className="font-oswald text-red-600 cursor-pointer font-small md:font-medium"
          >
            09821923920
          </Link>
        </div>
      </div>
      <div className="font-medium text-xl text-gray-600">Or</div>
      <Button onClick={() => router.push("https://theogburger.petpooja.com")}>Order Online</Button>
    </div>
  );
};

export default OrderByPhone;
