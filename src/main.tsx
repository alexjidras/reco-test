import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import "./index.css";

import { router } from "./routes";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => {
        // Handle query errors globally
        alert("Global Query Error:" + error.message);
        // You can also display a toast notification, log to an error tracking service, etc.
      },
    },
    mutations: {
      onError: (error) => {
        // Handle mutation errors globally
        console.error("Global Mutation Error:" + error.message);
        // Same here, show notification or log the error if needed
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
);
