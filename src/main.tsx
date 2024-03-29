import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import About from "@/pages/About.tsx";
import Home from "@/pages/Home.tsx";
import PizzaDetails from "@/pages/PizzaDetails.tsx";
import PizzaMenu from "@/pages/PizzaMenu.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 6
    }
  }
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/menu",
    element: <PizzaMenu />
  },
  {
    path: "/menu",
    element: <PizzaMenu />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/pizza/:id",
    element: <PizzaDetails />
  }
]);

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
