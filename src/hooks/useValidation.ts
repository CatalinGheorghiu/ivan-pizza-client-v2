import { useState } from "react";

import { InitialFormValuesType } from "@/types/pizza.ts";
import { InputFieldError, InputFieldsType } from "@/types/validation.ts";
import {
  validateValue,
  ValidationRule,
  validationRules
} from "@/utils/formValidation.ts";

export const useValidation = () => {
  const [errors, setErrors] = useState<InputFieldError>({});

  const validateField = (fieldName: string, value: string | string[]) => {
    // Retrieve validation rules for the field
    const rules: ValidationRule = validationRules[fieldName];

    // Update errors for the field based on validation rules
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: validateValue(fieldName, value, rules)
    }));
  };

  const validateAllFields = (values: InitialFormValuesType) => {
    let newErrors: InputFieldsType = {};

    for (const [key, value] of Object.entries(values)) {
      const rules = validationRules[key];
      newErrors = { ...newErrors, [key]: validateValue(key, value, rules) };
    }

    setErrors(newErrors);
  };

  return {
    errors,
    validateField,
    validateAllFields
  };
};
