import React from "react";
import {createBrowserRouter,RouterProvider} from "react-router";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

const Navigation= () => {

let router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage
  },
  {
    path: "/login",
    Component: LoginPage
  },
]);

    return (
       <RouterProvider router={router} />
    )
}

export default Navigation