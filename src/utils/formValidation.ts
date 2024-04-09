export type ValidationRule = {
  minLength: number;
  maxLength: number;
  customValidation?: (value: string) => boolean;
};

export type RulesType = {
  [key: string]: ValidationRule;
};

export const validateValue = (
  _name: string,
  value: string | string[],
  rules: ValidationRule
) => {
  const { minLength, maxLength, customValidation } = rules;

  if (typeof value === "string") {
    const trimmedValue = value.trim();
    if (
      customValidation &&
      customValidation &&
      !customValidation(trimmedValue)
    ) {
      return `Field is not valid!`;
    }

    if (trimmedValue.length < minLength) {
      return `Field must contain at least ${minLength} characters!`;
    } else if (trimmedValue.length > maxLength) {
      return `Field must not contain more than ${maxLength} characters!`;
    } else {
      return "";
    }
  } else {
    if (value.length < minLength) {
      return `Field must contain at least ${minLength} item(s)!`;
    } else if (value.length > maxLength) {
      return `Field must not contain more than ${maxLength} items!`;
    } else {
      return "";
    }
  }
};

const emailValidation = (value: string): boolean =>
  new RegExp(/^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/).test(value);

export const validationRules: RulesType = {
  firstName: { minLength: 3, maxLength: 20 },
  lastName: { minLength: 3, maxLength: 20 },
  email: {
    minLength: 5,
    customValidation: (value: string) => emailValidation(value),
    maxLength: 100
  },
  message: { minLength: 10, maxLength: 500 },
  name: { minLength: 3, maxLength: 20 },
  origin: { minLength: 3, maxLength: 20 },
  ingredientsIds: { minLength: 1, maxLength: 100 },
  description: { minLength: 10, maxLength: 200 },
  image: { minLength: 1, maxLength: 100 }
};
