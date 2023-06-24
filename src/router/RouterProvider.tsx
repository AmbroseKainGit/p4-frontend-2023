import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      }
    ]
  }
]);

export const createRouter = () => {
  return <RouterProvider router={router} />;
};
