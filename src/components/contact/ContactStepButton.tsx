import { ComponentPropsWithoutRef } from "react";

type ContactStepButtonProps = Omit<
  ComponentPropsWithoutRef<"button">,
  "onClick"
> & {
  onClick?: () => void;
};

const ContactStepButton = (props: ContactStepButtonProps) => {
  return (
    <button
      {...props}
      className={`disabled:bg-custom-brown-1 bg-custom-red-1 px-6 py-2 uppercase text-white ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ContactStepButton;
