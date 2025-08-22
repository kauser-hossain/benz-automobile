
import React from "react";
import { Navigate, useLocation, Outlet } from "react-router";
import useAuth from "@/hooks/useAuth";

const PrivateRoute = () => {
  const { user, loading } = useAuth();
  const location = useLocation();

  
};

export default PrivateRoute;
