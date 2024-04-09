import { ComponentPropsWithoutRef } from "react";

export type InputProps = ComponentPropsWithoutRef<"input"> & {
  error?: string;
  label?: string;
};

const Input = (props: InputProps) => {
  return (
    <>
      <label className="my-2 flex w-full flex-col">
        <span className="pb-1">{props.label}</span>
        <input
          {...props}
          className="border-2 border-custom-red-1 bg-custom-gray-1 px-4 py-2 focus:outline-none focus:ring focus:ring-amber-500"
        />
        {props.error && (
          <span className="mt-4 w-full text-sm text-red-600">
            {props.error}
          </span>
        )}
      </label>
    </>
  );
};

export default Input;
