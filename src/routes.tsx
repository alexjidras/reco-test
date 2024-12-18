import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./ui/Layout";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/apps",
        lazy: async () => ({
          Component: (await import("./modules/AppsModule/pages/AppsPage"))
            .default,
          // loader: <p>Loading...</p>,
        }),
      },
      {
        path: "/data",
        element: <></>,
      },
      {
        path: "/identities",
        element: <></>,
      },
    ],
  },
]);
