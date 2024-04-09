import { ChangeEvent, FormEvent, useState } from "react";

import { InputFieldError, InputFieldsType } from "@/types/validation.ts";
import {
  validateValue,
  ValidationRule,
  validationRules
} from "@/utils/formValidation";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  message: ""
};

const useForm = () => {
  const [values, setValues] = useState<InputFieldsType>(initialState);
  const [errors, setErrors] = useState<InputFieldError>({});
  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validateField = (fieldName: string, value: string) => {
    // Retrieve validation rules for the field
    const rules: ValidationRule = validationRules[fieldName];

    // Update errors for the field based on validation rules
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: validateValue(fieldName, value, rules)
    }));
  };

  const validateAllFields = () => {
    let newErrors: InputFieldsType = {};

    for (const [key, value] of Object.entries(values)) {
      const rules = validationRules[key];
      newErrors = { ...newErrors, [key]: validateValue(key, value, rules) };
    }

    setErrors(newErrors);
  };

  /**
   * - Check if object {errors} contains at least one error
   * - Check if inputs are empty
   */
  const hasError =
    Object.values(errors).some((error) => Boolean(error)) ||
    !Object.values(values).every((value) => Boolean(value));

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

  async function submitForm(formData: FormData) {
    const accessKey = import.meta.env.VITE_WEB3_FORMS_ACCESS_KEY;
    formData.append("access_key", accessKey);

    const response = await fetch(`${import.meta.env.VITE_WEB3_FORMS_URL}`, {
      method: "POST",
      body: formData
    });

    if (!response.ok) {
      throw new Error(
        `Failed to submit form. Server returned status ${response.status}.`
      );
    }

    try {
      return response.json();
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      // Validate all fields before submitting
      validateAllFields();
      const formData = new FormData();

      for (const valueKey in values) {
        formData.append(valueKey, values[valueKey]);
      }

      await submitForm(formData);

      setHasBeenSubmitted(true);

      setValues(initialState);
    } catch (error) {
      if (error instanceof Error) {
        // Handle the error here
        console.error("Error occurred during form submission:", error);
        setSubmitError(error.message);
      }
    }
  }

  return {
    values,
    errors,
    hasError,
    handleChange,
    handleSubmit,
    validateAllFields,
    hasBeenSubmitted,
    submitError
  };
};

export default useForm;
