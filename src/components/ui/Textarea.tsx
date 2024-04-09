import { ComponentPropsWithoutRef } from "react";

export type TextareaProps = ComponentPropsWithoutRef<"textarea"> & {
  error?: string;
  label?: string;
};

const Textarea = (props: TextareaProps) => {
  return (
    <>
      <label className="my-2 flex w-full flex-col">
        <span className="pb-1">{props.label}</span>
        <textarea
          {...props}
          className="border-2 border-custom-red-1 bg-custom-gray-1 px-4 py-2 focus:outline-none focus:ring focus:ring-amber-500"
        />
        {props.error && (
          <span className="mt-4 text-sm text-red-600">{props.error}</span>
        )}
      </label>
    </>
  );
};

export default Textarea;
