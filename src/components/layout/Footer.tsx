import { Link } from "react-router-dom";

import { getCurrentDate } from "@/utils";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden p-6 text-center text-sm font-semibold leading-6 md:text-base">
      <p className="relative z-20 mx-auto max-w-fit">
        © Ivan&apos;s Pizza {getCurrentDate()}. Website Designed and Developed
        by{" "}
        <Link
          to="https://catalin-gheorghiu.dev/"
          target="_blank"
          className="text-red-500 underline underline-offset-2 outline-offset-2"
        >
          Catalin Gheorghiu
        </Link>
      </p>
      <div className="absolute top-1/2 z-10 h-full w-full -translate-y-1/2 overflow-hidden bg-black/50 p-4"></div>
    </footer>
  );
};

export default Footer;
