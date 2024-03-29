import { Link } from "react-router-dom";

import Placeholder from "@/assets/placeholder.png";
import { PizzaType } from "@/types/pizza.ts";
import { splitForUrl } from "@/utils";

type PizzaItemProps = {
  pizza: PizzaType;
};

const PizzaItem = ({ pizza }: PizzaItemProps) => {
  const pizzaUrl = splitForUrl(pizza.name);
  return (
    <li className="cursor-pointer">
      <Link to={`${pizzaUrl}`}>
        <img
          src={pizza.image ?? Placeholder}
          alt={pizza.name}
          className="aspect-[6/9] rounded-2xl object-cover transition-all duration-300 hover:opacity-80"
        />

        <div className="py-4 font-semibold">
          <h2 className="font-semibold">{pizza.name}</h2>
          <h3 className="text-sm italic text-gray-400">{pizza.origin}</h3>
        </div>
      </Link>
    </li>
  );
};

export default PizzaItem;
