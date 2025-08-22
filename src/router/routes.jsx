// import MainLayout from "@/layout/MainLayout";
// import About from "@/pages/About/About";
// import Contact from "@/pages/contact/Contact";
// import Home from "@/pages/Home/Home";
// import Login from "@/pages/login/Login";
// import Register from "@/pages/register/Register";
// import Service from "@/pages/service/Service";
// import React from "react";
// import { createBrowserRouter } from "react-router";
// import PrivateRoute from "./PrivateRoute";
// import AdminRoutes from "./AdminRoutes";
// import AdminHome from "@/pages/AdminDashboard/Home/Home";
// import AddService from "@/pages/AdminDashboard/AddService/AddService";
// import ManageService from "@/pages/AdminDashboard/ManageService/ManageService";
// import AllUsers from "@/pages/AdminDashboard/AllUsers/AllUsers";

// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "service",
//         element: <Service />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//       {
//         path: "register",
//         element:<Register/>

//       },
//       {
//         path: "login",
//         element: <Login />,
//       },
//     ],
//   },
//  {
//   path:"dashboard",
//   element:
//     <PrivateRoute>
//       <AdminRoutes />
//     </PrivateRoute>,
//   children:[
//     {
//       index:true,
//       element:<AdminHome/>
//     },
//     {
//       path:"addservice",
//       element:<AddService/>
//     },
//     {
//       path:"manage-service",
//       element:<ManageService/>
//     },
//     {
//       path:"allusers",
//       element:<AllUsers/>
//     }
//   ]
// }
// ]);

// export default routes;
import MainLayout from "@/layout/MainLayout";
import About from "@/pages/About/About";
import Contact from "@/pages/contact/Contact";
import Home from "@/pages/Home/Home";
import Login from "@/pages/login/Login";
import Register from "@/pages/register/Register";
import Service from "@/pages/service/Service";
import React from "react";
import { createBrowserRouter } from "react-router";

import AdminHome from "@/pages/AdminDashboard/Home/Home";
import AddService from "@/pages/AdminDashboard/AddService/AddService";
import ManageService from "@/pages/AdminDashboard/ManageService/ManageService";
import AllUsers from "@/pages/AdminDashboard/AllUsers/AllUsers";
import AdminLayout from "@/layout/AdminLayout";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "service", element: <Service /> },
      { path: "contact", element: <Contact /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminLayout />,
    children: [
      { index: true, element: <AdminHome /> },
      { path: "addservice", element: <AddService /> },
      { path: "manage-service", element: <ManageService /> },
      { path: "allusers", element: <AllUsers /> },
    ],
  },
]);

export default routes;
