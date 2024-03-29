import { PizzaType } from "@/types/pizza.ts";
import { PAGINATION_LIMIT } from "@/utils/constants.ts";

export type PizzaDataType = {
  data: PizzaType[];
  currentPage: number;
  nextPage: number | null;
};

export const useFetchPaginatedPizzas = async ({
  pageParam
}: {
  pageParam: number;
}): Promise<PizzaDataType> => {
  const offset = pageParam * PAGINATION_LIMIT;
  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/pizza?limit=${PAGINATION_LIMIT}&offset=${offset}`
  );
  const data = await response.json();
  const nextPage = data.length === PAGINATION_LIMIT ? pageParam + 1 : null;

  return {
    data,
    currentPage: pageParam,
    nextPage
  };
};
