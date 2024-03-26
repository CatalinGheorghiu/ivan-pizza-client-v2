import { Link } from "react-router-dom";

import { getCurrentDate } from "@/utils";

const Footer = () => {
  return (
    <footer className="p-6 text-center text-sm font-semibold leading-6 md:text-base">
      © Ivan's Pizza {getCurrentDate()}. Website Designed and Developed by{" "}
      <Link
        to="https://catalin-gheorghiu.dev/"
        target="_blank"
        className="text-red-500 underline underline-offset-2 outline-offset-2"
      >
        Catalin Gheorghiu
      </Link>
    </footer>
  );
};

export default Footer;
