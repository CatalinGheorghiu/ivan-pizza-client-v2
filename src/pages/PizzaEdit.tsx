import { useLocation } from "react-router-dom";

import Layout from "@/components/layout/Layout.tsx";
import PizzaForm from "@/components/pizzaForm/PizzaForm.tsx";
import { usePizzaForm } from "@/hooks/usePizzaForm.ts";
import { InitialFormValuesType } from "@/types/pizza.ts";

const PizzaEdit = () => {
  const {
    state: { pizza }
  } = useLocation();

  const initialValues: InitialFormValuesType = {
    name: pizza.name,
    origin: pizza.origin,
    image: pizza.image,
    ingredientsIds: pizza.ingredientsIds,
    description: pizza.description
  };

  const {
    handleSubmit,
    values,
    handleFileChange,
    loadingPreviewImg,
    previewSource,
    setValues,
    handleChange,
    validateField,
    errors
  } = usePizzaForm(initialValues, {
    resource: `${import.meta.env.VITE_SERVER_URL}/pizza/${pizza.id}`,
    options: "PATCH"
  });

  const formData = {
    values,
    setValues,
    ingredients: pizza.ingredients,
    errors,
    handleChange,
    previewSource,
    loadingPreviewImg,
    validateField,
    handleFileChange
  };

  return (
    <Layout>
      <section className="relative m-auto my-8 h-full w-full max-w-md">
        <PizzaForm
          onSubmit={handleSubmit}
          formData={formData}
          formTitle={`Edit pizza "${pizza.name}"`}
          submitButtonTitle="Save pizza"
        />
      </section>
    </Layout>
  );
};

export default PizzaEdit;
