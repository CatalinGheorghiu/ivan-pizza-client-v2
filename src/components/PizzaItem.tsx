import { Link } from "react-router-dom";

import { PizzaType } from "@/types/pizza.ts";
import { splitForUrl } from "@/utils";

type PizzaItemProps = {
  pizza: PizzaType;
};

const PizzaItem = ({ pizza }: PizzaItemProps) => {
  const pizzaUrl = splitForUrl(pizza.name);
  return (
    <li className="aspect-[6/9] cursor-pointer">
      <Link to={`/pizza/${pizzaUrl}`} state={{ pizzaId: pizza.id }}>
        <img
          src={pizza.image}
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
