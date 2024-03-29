import { useLocation } from "react-router-dom";

import Error from "@/components/Error.tsx";
import Layout from "@/components/layout/Layout.tsx";
import Loading from "@/components/Loading.tsx";
import { useFetchPizzaDetails } from "@/hooks/useFetchPizzaDetails.ts";

const PizzaDetails = () => {
  const {
    state: { pizzaId }
  } = useLocation();
  const { data: pizza, status, error } = useFetchPizzaDetails(pizzaId);

  return (
    <Layout>
      <section className="text-slate-900">
        {status === "pending" ? (
          <Loading />
        ) : status === "error" ? (
          <Error message={error.message} />
        ) : (
          <div className="bg-white p-4 md:p-10">
            <div>
              <img
                className="aspect-video h-80 w-full object-cover md:h-auto"
                src={pizza?.image}
                alt={pizza?.name}
              />
            </div>

            <div className="flex flex-col justify-between py-6 md:pt-10">
              <h1 className="pb-2 text-2xl font-semibold md:text-4xl">
                {pizza?.name}
              </h1>
              <p className="text-sm text-slate-600">
                <span className="font-semibold">Origin: </span>
                <span className="italic">{pizza?.origin}</span>
              </p>
            </div>

            <p className="py-6">{pizza?.description}</p>

            <div className="py-6">
              <h3 className="text-xl font-semibold">Ingredients:</h3>
              <ul className="pt-2">
                {pizza?.ingredients.map(({ name, id }) => (
                  <li key={id} className="ml-4 list-disc py-1">
                    <p className="uppercase text-slate-500">{name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default PizzaDetails;
