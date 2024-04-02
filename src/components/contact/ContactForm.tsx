import { useState } from "react";

import ContactButtons from "@/components/contact/ContactButtons.tsx";
import ContactInputs from "@/components/contact/ContactInputs.tsx";
import useForm from "@/hooks/useForm.ts";
import { steps } from "@/utils/contactSteps.ts";

const ContactForm = () => {
  const {
    handleChange,
    values,
    hasError,
    errors,
    handleSubmit,
    hasBeenSubmitted,
    submitError
  } = useForm();
  const [currentStep, setCurrentStep] = useState(0);

  function handleNextStep() {
    setCurrentStep((prevState) => prevState + 1);
  }

  function handlePrevStep() {
    setCurrentStep((prevState) => prevState - 1);
  }

  const contactButtonsData = {
    currentStep,
    handleNextStep,
    handlePrevStep,
    errors,
    hasError,
    handleSubmit
  };

  const contactInputsData = {
    currentStep,
    values,
    handleChange,
    errors,
    submitError
  };

  if (hasBeenSubmitted && !submitError) {
    return (
      <div className="px-6">
        <p className="py-20 text-center text-2xl text-custom-red-1">
          Thank you! <br /> Message has been successfully sent!
        </p>
      </div>
    );
  }

  return (
    <form className="py-20" onSubmit={handleSubmit}>
      <div className="relative z-20 px-6">
        <h2 className="bg-custom-gray-1 relative z-20 border-y-2 border-custom-red-1 py-2 text-center text-xl font-semibold uppercase text-custom-red-1">
          {steps[currentStep].question}
        </h2>
        <div className="absolute -top-10 left-1/2 z-10 h-40 w-40 -translate-x-1/2 rounded-full border-2 border-custom-red-1">
          <p className="pt-4 text-center text-sm font-semibold text-custom-red-1">
            {currentStep + 1}/{steps.length}
          </p>
        </div>
      </div>

      <ContactInputs data={contactInputsData} />

      <ContactButtons data={contactButtonsData} />
    </form>
  );
};

export default ContactForm;
