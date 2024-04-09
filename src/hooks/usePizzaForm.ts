import { useQueryClient } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useImagePreviewUpload } from "@/hooks/useImagePreviewUpload.ts";
import { useValidation } from "@/hooks/useValidation.ts";
import { InitialFormValuesType } from "@/types/pizza.ts";

type UploadMethod = "POST" | "PATCH";

export const usePizzaForm = (
  initialValues: InitialFormValuesType,
  fetchDetails: {
    resource: string;
    options: UploadMethod;
  }
) => {
  const [values, setValues] = useState(initialValues);
  const { previewSource, uploadUrl, loadingPreviewImg, handleFileChange } =
    useImagePreviewUpload({
      initialValue: values.image // Pass existing image URL if available
    });

  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { errors, validateField, validateAllFields } = useValidation();

  async function uploadData(data: InitialFormValuesType) {
    const response = await fetch(fetchDetails.resource, {
      method: fetchDetails.options,
      body: JSON.stringify(data),
      headers: { "Content-type": "application/json" }
    });

    if (!response.ok) {
      const err = await response.json();
      throw new Error(
        `Failed to upload data. Server returned status ${err.statusCode}. ${err.message}`
      );
    }

    const result = await response.json();

    // Invalidate the cache for the pizzas list and the pizza details
    await queryClient.invalidateQueries({ queryKey: ["pizzas"] });
    await queryClient.invalidateQueries({ queryKey: ["pizza", result.id] });

    return result;
  }

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // Validate the field and update its value in the state
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value
    }));

    validateField(event.target.name, event.target.value);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newValues: InitialFormValuesType & {
      canBeDeleted?: boolean;
    } = { ...values };
    newValues.image = uploadUrl === "" ? values.image : uploadUrl;

    validateAllFields(newValues);

    newValues.canBeDeleted = true;

    await uploadData(newValues);

    navigate("/menu");
  }

  return {
    values,
    setValues,
    errors,
    handleChange,
    previewSource,
    loadingPreviewImg,
    validateField,
    handleFileChange,
    handleSubmit
  };
};
