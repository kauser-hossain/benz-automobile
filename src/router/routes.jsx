import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About/About";
import Contact from "@/pages/contact/Contact";
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";
import Ragister2 from "@/pages/register/Ragister2";
// import Register from "@/pages/register/Register";
import Service from "@/pages/service/Service";
import React from "react";
import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "register",
        element:<Ragister2/>
       
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

export default routes;
