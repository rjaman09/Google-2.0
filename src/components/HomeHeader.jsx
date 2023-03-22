import Link from "next/link";
import { TbGridDots } from "react-icons/tb";

export default function HomeHeader() {
  return (
    <header className="flex justify-end p-5 text-sm">
      <div className="flex space-x-4 items-center">
        <Link href="http://mail.google.com" className="hover:underline tracking-wider">
          Gmail
        </Link>
        <Link href="http://image.google.com" className="hover:underline tracking-wider">
          Images
        </Link>
        <TbGridDots className="bg-transparent hover:bg-gray-100 rounded-full text-4xl p-2" />
        <button className="bg-blue-500 text-white px-6 py-2 font-medium rounded-[5px] hover:brightness-105 hover:shadow-md transition-shadow">Sign In</button>
      </div>
    </header>
  );
};
