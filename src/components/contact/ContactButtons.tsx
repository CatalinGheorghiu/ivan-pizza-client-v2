import ContactStepButton from "@/components/contact/ContactStepButton.tsx";
import { InputFieldError } from "@/hooks/useForm.ts";
import { steps } from "@/utils/contactSteps.ts";

type ContactButtonsProps = {
  data: {
    currentStep: number;
    handleNextStep: () => void;
    handlePrevStep: () => void;
    errors: InputFieldError;
    hasError: boolean;
  };
};

const ContactButtons = ({ data }: ContactButtonsProps) => {
  const { currentStep, handlePrevStep, handleNextStep, errors, hasError } =
    data;
  function hasErrorsInStep(stepIndex: number) {
    const fields = steps[stepIndex].fields;

    // If any field has an error (not an empty string), return true
    const hasErrorInFields = fields.some((field) => errors[field.name] !== "");

    // If any field has not yet been validated (error is undefined), return true
    const hasUnvalidatedField = fields.some(
      (field) => typeof errors[field.name] === "undefined"
    );

    // If there are errors in the fields or unvalidated fields, return true
    return hasErrorInFields || hasUnvalidatedField;
  }

  return (
    <div className="flex w-full justify-center gap-5 px-6">
      {currentStep !== 0 && (
        <ContactStepButton onClick={handlePrevStep} type="button">
          Previous
        </ContactStepButton>
      )}

      {currentStep !== steps.length - 1 && (
        <ContactStepButton
          type="button"
          onClick={handleNextStep}
          disabled={hasErrorsInStep(currentStep)}
        >
          Next
        </ContactStepButton>
      )}

      {currentStep === steps.length - 1 && (
        <ContactStepButton type="submit" disabled={hasError}>
          Send
        </ContactStepButton>
      )}
    </div>
  );
};

export default ContactButtons;
