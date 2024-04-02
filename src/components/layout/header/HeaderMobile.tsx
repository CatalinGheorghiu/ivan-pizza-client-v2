import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "@/assets/ivans_pizza_logo.png";
import Hamburger from "@/components/icons/Hamburger.tsx";
import MenuList from "@/components/layout/header/MenuList.tsx";

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="flex justify-between md:hidden">
        <button
          className="z-50 cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Hamburger openMenu={openMenu} />
        </button>

        <Link to="/">
          <img src={Logo} alt="Ivan's PizzaMenu Logo" width={80} height={80} />
        </Link>
      </div>

      <nav
        className={`
          fixed bottom-0 left-0 right-0 top-0 z-40 h-screen transform bg-stone-950 p-6 transition-all duration-500 
          ${openMenu ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <MenuList />
      </nav>
    </>
  );
};

export default HeaderMobile;
