import { Link } from "react-router-dom";

import Logo from "@/assets/ivans_pizza_logo.png";
import Plus from "@/components/icons/Plus.tsx";
import MenuList from "@/components/layout/header/MenuList.tsx";

const HeaderDesktop = () => {
  return (
    <nav className="hidden justify-between md:flex md:items-center">
      <Link to="/">
        <img src={Logo} alt="Ivan's PizzaMenu Logo" width={100} height={100} />
      </Link>

      <MenuList />

      <Link to="/menu">
        <button className="flex w-full max-w-fit items-center gap-x-2 rounded-md bg-white px-4 py-3 font-bold text-black hover:text-red-600">
          <Plus />
          <span>Add Pizza</span>
        </button>
      </Link>
    </nav>
  );
};

export default HeaderDesktop;
