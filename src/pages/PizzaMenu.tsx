import Layout from "@/components/layout/Layout.tsx";
import PizzaList from "@/components/PizzaList.tsx";

const PizzaMenu = () => {
  return (
    <Layout>
      <section className="relative mx-auto max-w-screen-xl py-8">
        <PizzaList />
      </section>
    </Layout>
  );
};

export default PizzaMenu;
