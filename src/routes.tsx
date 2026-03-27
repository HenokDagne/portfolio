import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default routes;
