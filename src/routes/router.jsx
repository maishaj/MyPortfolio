import { createBrowserRouter } from "react-router";
import PortfolioLayout from "../PortfolioLayout/PortfolioLayout";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element:<PortfolioLayout></PortfolioLayout>,
    children:[
      {
        index:true,
        element:<Home></Home>
      }
    ]
  },
]);