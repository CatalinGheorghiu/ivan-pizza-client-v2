import { ReactNode } from "react";

type PizzaFormButtonProps = {
  children: ReactNode;
  className?: string;
};

const PizzaFormButton = ({ children, className }: PizzaFormButtonProps) => {
  return (
    <button
      className={`flex w-full items-center justify-center bg-custom-red-1 py-3 text-center text-white ${className}`}
      type="submit"
    >
      {children}
    </button>
  );
};

export default PizzaFormButton;
