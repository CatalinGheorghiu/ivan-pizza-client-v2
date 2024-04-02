import { ChangeEvent, Fragment } from "react";

import Input from "@/components/ui/Input.tsx";
import Textarea from "@/components/ui/Textarea.tsx";
import { InputFieldError, InputFieldsType } from "@/hooks/useForm.ts";
import { FieldType, steps } from "@/utils/contactSteps.ts";

type ContactInputsProps = {
  data: {
    currentStep: number;
    values: InputFieldsType;
    handleChange: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    errors: InputFieldError;
    submitError?: string;
  };
};

const ContactInputs = ({ data }: ContactInputsProps) => {
  const { currentStep, values, handleChange, errors, submitError } = data;
  return (
    <div className="relative z-20 flex h-full w-full flex-col items-center justify-center space-y-2 bg-custom-gray-1 px-6 py-20">
      {steps[currentStep].fields.map(
        ({ name, type, placeholder, elementType }: FieldType) => (
          <Fragment key={name}>
            {elementType === "textarea" ? (
              <Textarea
                name={name}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleChange}
                placeholder={placeholder}
                required
              />
            ) : (
              <Input
                type={type}
                name={name}
                value={values[name]}
                onChange={handleChange}
                onBlur={handleChange}
                placeholder={placeholder}
                required
              />
            )}

            {errors[name] && (
              <span className="mt-4 text-sm text-red-600">{errors[name]}</span>
            )}

            {submitError && (
              <p className="text-center text-sm text-red-600">{submitError}</p>
            )}
          </Fragment>
        )
      )}
    </div>
  );
};

export default ContactInputs;
