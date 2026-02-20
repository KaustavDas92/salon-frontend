import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router";

import HomePage from "./pages/HomePage";

const Navigation= () => {

let router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage
  },
]);

    return (
       <RouterProvider router={router} />
    )
}

export default Navigation