import { useInfiniteQuery } from "@tanstack/react-query";
import { Fragment, useEffect } from "react";

import ErrorDisplay from "@/components/ErrorDisplay.tsx";
import Loading from "@/components/Loading.tsx";
import PizzaItem from "@/components/PizzaItem.tsx";
import { useFetchPaginatedPizzas } from "@/hooks/useFetchPaginatedPizzas.ts";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver.ts";

const PizzaList = () => {
  const { ref, inView } = useIntersectionObserver();
  const {
    data: pizzas,
    error,
    status,
    fetchNextPage,
    isFetchingNextPage
  } = useInfiniteQuery({
    queryKey: ["pizzas"],
    queryFn: useFetchPaginatedPizzas,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === "pending") {
    return <Loading />;
  }

  if (status === "error") {
    return <ErrorDisplay message={error.message} />;
  }

  return (
    <>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8 md:grid-cols-4 md:gap-12">
        {pizzas.pages.map((page) => (
          <Fragment key={page.currentPage}>
            {page.data.map((pizza) => (
              <PizzaItem key={pizza.id} pizza={pizza} />
            ))}
          </Fragment>
        ))}
      </ul>

      <div
        className="mx-auto h-full w-full items-center justify-center"
        ref={ref}
      >
        {isFetchingNextPage && <Loading />}
      </div>
    </>
  );
};

export default PizzaList;
