import { ReactNode } from "react";

type PizzaFormHeaderProps = {
  children: ReactNode;
};

const PizzaFormHeader = ({ children }: PizzaFormHeaderProps) => {
  return (
    <div className="relative z-20 px-6">
      <h2 className="relative z-20 border-y-2 border-custom-red-1 bg-custom-gray-1 py-2 text-center text-xl font-semibold uppercase text-custom-red-1">
        {children}
      </h2>
      <div className="absolute -top-10 left-1/2 z-10 h-40 w-40 -translate-x-1/2 rounded-full border-2 border-custom-red-1"></div>
    </div>
  );
};

export default PizzaFormHeader;
