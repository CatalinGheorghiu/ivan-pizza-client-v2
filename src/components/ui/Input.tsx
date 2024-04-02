import { ComponentPropsWithoutRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
};

const Input = (props: InputProps) => {
  return (
    <>
      <label className="flex w-full flex-col border-2 border-custom-red-1">
        <input
          {...props}
          className="bg-custom-gray-1 px-4 py-2 focus:outline-none focus:ring focus:ring-amber-500"
        />
      </label>
      <span className="mt-4 text-sm">{props.error}</span>
    </>
  );
};

export default Input;
