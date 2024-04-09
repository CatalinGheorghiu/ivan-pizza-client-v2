import Layout from "@/components/layout/Layout.tsx";
import PizzaForm from "@/components/pizzaForm/PizzaForm.tsx";
import { usePizzaForm } from "@/hooks/usePizzaForm.ts";
import { InitialFormValuesType } from "@/types/pizza.ts";

const initialValues: InitialFormValuesType = {
  name: "",
  origin: "",
  image: "",
  ingredientsIds: [],
  description: ""
};
const PizzaCreate = () => {
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
    resource: `${import.meta.env.VITE_SERVER_URL}/pizza`,
    options: "POST"
  });

  const formData = {
    values,
    setValues,
    ingredients: [],
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
          formTitle="Create your own pizza"
          submitButtonTitle="Create Pizza"
        />
      </section>
    </Layout>
  );
};

export default PizzaCreate;
