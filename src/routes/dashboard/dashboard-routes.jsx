import Dashboard from "../../views/dashboard/Dashboard";
import CreateProduct from "../../views/dashboard/product/create-product/CreateProduct";
import Product from "../../views/dashboard/product/Product";
import Home from "../../views/dashboard/home/Home";

const dashboardRoutes = {
  path: "/dashboard",
  element: <Dashboard />,
  children: [
    {
      path: "/dashboard",
      element: <Home />,
    },
    {
      path: "/dashboard/product",
      element: <Product />,
    },
    {
      path: "/dashboard/create-product",
      element: <CreateProduct />,
    },
  ],
};

export default dashboardRoutes;