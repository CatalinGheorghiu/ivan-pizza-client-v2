import { NavLink } from "react-router-dom";

import { menuItems } from "@/utils/menuItems.ts";

const MenuList = () => {
  return (
    <ul className="flex flex-col gap-y-6 pt-32 text-2xl font-bold md:flex-row md:gap-x-12 md:pt-0 md:text-xl">
      {menuItems.length > 0 &&
        menuItems.map(({ label, url }) => (
          <li
            key={url}
            className="link link-underline link-underline-black w-fit"
          >
            <NavLink to={url}>{label}</NavLink>
          </li>
        ))}
    </ul>
  );
};

export default MenuList;
