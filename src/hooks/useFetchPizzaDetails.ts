import { useQuery } from "@tanstack/react-query";

import { PizzaType } from "@/types/pizza.ts";

const fetchPizzaDetails = async (pizzaId: string): Promise<PizzaType> => {
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/pizza/${pizzaId}`
  );
  return response.json();
};

export const useFetchPizzaDetails = (id: string) => {
  return useQuery({
    queryKey: ["pizza", id],
    queryFn: async () => fetchPizzaDetails(id)
  });
};
