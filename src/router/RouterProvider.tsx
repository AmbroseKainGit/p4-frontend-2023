import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />
  }
]);

export const createRouter = () => {
  return <RouterProvider router={router} />;
};
