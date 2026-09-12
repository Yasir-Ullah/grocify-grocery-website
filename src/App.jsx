import React from "react";
import Home from "./compoets/Home";
import Fruits from "./compoets/Fruits";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dairy from "./compoets/Dairy";
import Seefood from "./compoets/Seefood";
import Allproducts from "./compoets/Allproducts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/fruits",
      element: <Fruits />,
    },
    {
      path: "/dairy",
      element: <Dairy />,
    },
    {
      path: "/seefood",
      element: <Seefood />,
    },
    {
      path: "/allproducts",
      element: <Allproducts />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
