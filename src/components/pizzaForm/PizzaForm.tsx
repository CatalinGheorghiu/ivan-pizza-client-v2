import { ChangeEvent, FormEvent } from "react";

import PizzaFormButton from "@/components/pizzaForm/PizzaFormButton.tsx";
import PizzaFormHeader from "@/components/pizzaForm/PizzaFormHeader.tsx";
import PizzaFormInputs from "@/components/pizzaForm/PizzaFormInputs.tsx";
import { IngredientType, InitialFormValuesType } from "@/types/pizza.ts";
import { InputFieldError } from "@/types/validation.ts";

type FormDataType = {
  values: InitialFormValuesType;
  setValues: (
    value:
      | ((prevState: InitialFormValuesType) => InitialFormValuesType)
      | InitialFormValuesType
  ) => void;
  handleChange: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  validateField: (fieldName: string, value: string | string[]) => void;
  ingredients: IngredientType[];
  handleFileChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  previewSource: string;
  loadingPreviewImg: boolean;
  errors: InputFieldError;
};

type PizzaFormProps = {
  onSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
  formData: FormDataType;
  formTitle: string;
  submitButtonTitle: string;
};

const PizzaForm = ({
  onSubmit,
  formData,
  formTitle,
  submitButtonTitle
}: PizzaFormProps) => {
  return (
    <div className="round h-full rounded-2xl bg-transparent text-slate-900">
      <form className="py-20" onSubmit={onSubmit}>
        <PizzaFormHeader>{formTitle}</PizzaFormHeader>

        <div className="relative z-20 flex h-full w-full flex-col items-center justify-center space-y-4 bg-custom-gray-1 px-6 py-20">
          <PizzaFormInputs data={formData} />

          <PizzaFormButton>{submitButtonTitle}</PizzaFormButton>
        </div>
      </form>
    </div>
  );
};

export default PizzaForm;
