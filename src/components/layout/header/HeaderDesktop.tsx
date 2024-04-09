import { Link } from "react-router-dom";

import Logo from "@/assets/ivans_pizza_logo.png";
import MenuList from "@/components/layout/header/MenuList.tsx";

const HeaderDesktop = () => {
  return (
    <nav className="hidden justify-between md:flex md:items-center">
      <Link to="/">
        <img src={Logo} alt="Ivan's PizzaMenu Logo" width={100} height={100} />
      </Link>

      <MenuList />
    </nav>
  );
};

export default HeaderDesktop;
