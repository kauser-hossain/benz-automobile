import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";

const AdminRoutes = () => {
  const { user, loading } = useAuth();
  console.log(user);

  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  // Loading state
  if (loading || isAdminLoading) {
    return <div>Checking Admin Role...</div>;
  }

  // If admin → allow nested pages via Outlet

  if (user && isAdmin) return <Outlet />; // nested pages

  // Not admin → redirect
  return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
