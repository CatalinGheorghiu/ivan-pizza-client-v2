import { ChangeEvent } from "react";

import InputFileWithPreview from "@/components/InputFileWithPreview.tsx";
import Input from "@/components/ui/Input.tsx";
import MultiSelect from "@/components/ui/MultiSelect.tsx";
import Textarea from "@/components/ui/Textarea.tsx";
import { IngredientType, InitialFormValuesType } from "@/types/pizza.ts";
import { InputFieldError } from "@/types/validation.ts";

interface PizzaFormInputsProps {
  data: {
    values: InitialFormValuesType;
    setValues: (
      value:
        | ((prevState: InitialFormValuesType) => InitialFormValuesType)
        | InitialFormValuesType
    ) => void;
    handleChange: (
      event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void;
    handleFileChange: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
    ingredients: IngredientType[];
    validateField: (fieldName: string, value: string | string[]) => void;
    previewSource: string;
    loadingPreviewImg: boolean;
    errors: InputFieldError;
  };
}

const PizzaFormInputs = ({
  data: {
    validateField,
    handleChange,
    handleFileChange,
    loadingPreviewImg,
    previewSource,
    setValues,
    values,
    errors,
    ingredients
  }
}: PizzaFormInputsProps) => {
  return (
    <>
      <Input
        type="text"
        name="name"
        error={errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleChange}
        placeholder="Name"
        label="Name"
      />
      <Input
        type="text"
        name="origin"
        error={errors.origin}
        value={values.origin}
        onChange={handleChange}
        onBlur={handleChange}
        placeholder="Origin"
        label="Origin"
      />

      <InputFileWithPreview
        previewSource={previewSource}
        loadingPreviewImg={loadingPreviewImg}
        handleFileChange={handleFileChange}
      />

      <MultiSelect
        setValues={setValues}
        error={errors.ingredientsIds}
        validateField={validateField}
        ingredients={ingredients}
      />

      <Textarea
        name="description"
        value={values.description}
        error={errors.description}
        onChange={handleChange}
        onBlur={handleChange}
        placeholder="Give us some details about your pizza"
        label="Description"
      />
    </>
  );
};

export default PizzaFormInputs;
