import { useQueryClient } from "@tanstack/react-query";
import { Link, useLocation, useNavigate } from "react-router-dom";

import ErrorDisplay from "@/components/ErrorDisplay.tsx";
import Layout from "@/components/layout/Layout.tsx";
import Loading from "@/components/Loading.tsx";
import { useFetchPizzaDetails } from "@/hooks/useFetchPizzaDetails.ts";
import { splitForUrl } from "@/utils";

const PizzaDetails = () => {
  const {
    state: { pizzaId }
  } = useLocation();
  const { data: pizza, status, error } = useFetchPizzaDetails(pizzaId);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  async function handleDeletePizza() {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}/pizza/${pizzaId}`,
      {
        method: "DELETE"
      }
    );

    if (response.ok) {
      await queryClient.invalidateQueries({ queryKey: ["pizzas"] });
      navigate("/menu");
    }
  }

  return (
    <Layout>
      <section className="text-slate-900">
        {status === "pending" ? (
          <Loading />
        ) : status === "error" ? (
          <ErrorDisplay message={error.message} />
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

            {pizza?.canBeDeleted && (
              <div className="mb-4 flex w-full gap-x-4 font-medium">
                <Link
                  to={`/pizza/edit/${splitForUrl(pizza.name)}`}
                  state={{ pizza }}
                  className="w-full"
                >
                  <button className="w-full border px-4 py-2 transition-all duration-300 hover:bg-stone-950 hover:text-white">
                    Edit
                  </button>
                </Link>

                <button
                  onClick={handleDeletePizza}
                  className="w-full bg-custom-red-1 px-4 py-2 text-white transition-all duration-300 hover:bg-red-800"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default PizzaDetails;
