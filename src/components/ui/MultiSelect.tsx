import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useMemo,
  useState
} from "react";

import DropdownInput from "@/components/DropdownInput.tsx";
import DropdownOptions from "@/components/DropdownOptions.tsx";
import { IngredientType, InitialFormValuesType } from "@/types/pizza.ts";

type MultiSelectProps = {
  setValues: Dispatch<SetStateAction<InitialFormValuesType>>;
  error?: string;
  validateField: (fieldName: string, value: string | string[]) => void;
  ingredients: IngredientType[];
};

const MultiSelect = ({
  setValues,
  error,
  validateField,
  ingredients
}: MultiSelectProps) => {
  const currentOptions = useMemo(() => {
    return ingredients.map((ingredient) => ingredient.name);
  }, [ingredients]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOptions, setDropdownOptions] =
    useState<string[]>(currentOptions);

  function handleDropdownClick() {
    setDropdownOpen((prevState) => !prevState);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newDropdownOptions = dropdownOptions.includes(event.target.value)
      ? dropdownOptions.filter((option) => option !== event.target.value)
      : [...dropdownOptions, event.target.name];

    validateField("ingredientsIds", newDropdownOptions);

    setDropdownOptions(newDropdownOptions);

    setValues((prevState) => ({
      ...prevState,
      ingredientsIds: prevState.ingredientsIds.includes(event.target.id)
        ? prevState.ingredientsIds.filter(
            (ingredientId) => ingredientId !== event.target.id
          )
        : [...prevState.ingredientsIds, event.target.id]
    }));
  }

  return (
    <>
      <div className="w-full">
        <div className="relative">
          <DropdownInput
            dropdownClick={handleDropdownClick}
            dropdownOpen={dropdownOpen}
            options={dropdownOptions}
          />
          {error && (
            <span className="mt-4 w-full text-sm text-red-600">{error}</span>
          )}

          {dropdownOpen && (
            <DropdownOptions
              options={dropdownOptions}
              handleChange={handleChange}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default MultiSelect;
