import { useQuery } from "@tanstack/react-query";

import { IngredientType } from "@/types/pizza.ts";

const fetchIngredients = async (): Promise<IngredientType[]> => {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}/ingredient`);

  return response.json();
};

export const useFetchIngredients = () => {
  return useQuery({
    queryKey: ["ingredient"],
    queryFn: async () => fetchIngredients()
  });
};
