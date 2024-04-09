import { ChangeEvent } from "react";

import ErrorDisplay from "@/components/ErrorDisplay.tsx";
import Loading from "@/components/Loading.tsx";
import { useFetchIngredients } from "@/hooks/useFetchIngredients.ts";
import { getElementInArray, isInArray } from "@/utils";
import { ingredientsOptions } from "@/utils/pizzaIngredients.ts";

type DropdownOptionsProps = {
  options: string[];
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const DropdownOptions = ({ options, handleChange }: DropdownOptionsProps) => {
  const {
    data: ingredients,
    status,
    error: ingredientsError
  } = useFetchIngredients();

  return (
    <div className="absolute top-20 h-60 w-full overflow-auto border-2 border-custom-red-1 bg-custom-gray-1 px-4 py-2">
      {status === "pending" ? (
        <Loading />
      ) : status === "error" ? (
        <ErrorDisplay message={ingredientsError.message} />
      ) : (
        <ul>
          {ingredientsOptions(ingredients).map(({ value, label }) => (
            <li key={value} className="flex items-center space-x-2 space-y-1">
              <input
                type="checkbox"
                name={label}
                id={value}
                value={getElementInArray(options, label)}
                onChange={handleChange}
                checked={isInArray(options, label)}
                required
              />
              <span>{label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownOptions;
