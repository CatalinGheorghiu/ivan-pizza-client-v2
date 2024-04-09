import DropdownArrow from "@/components/icons/DropdownArrow.tsx";
import { joinByComma } from "@/utils";

type DropdownInputProps = {
  dropdownClick: () => void;
  dropdownOpen: boolean;
  options: string[];
};

const DropdownInput = ({
  dropdownClick,
  dropdownOpen,
  options
}: DropdownInputProps) => {
  return (
    <div className="relative my-2 flex w-full flex-col">
      <span>Ingredients</span>
      <p className="border-2 border-custom-red-1 bg-custom-gray-1 px-4 py-2 text-gray-400 focus:outline-none focus:ring focus:ring-amber-500">
        {options.length > 0 ? (
          <span className="mr-8 block w-auto truncate">
            {joinByComma(options)}
          </span>
        ) : (
          <span>Ingredients</span>
        )}
      </p>
      <button
        type="button"
        onClick={dropdownClick}
        className="absolute right-4 top-8 cursor-pointer"
      >
        <DropdownArrow
          className={`${dropdownOpen ? "rotate-180" : "rotate-0"}`}
        />
      </button>
    </div>
  );
};

export default DropdownInput;
