import React from "react";
import { Navigate, Outlet, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import AdminLayout from "@/layout/AdminLayout";

// import React from "react";
// import { Navigate, Outlet, useLocation } from "react-router-dom"; // ✅ from react-router-dom
// import useAuth from "../hooks/useAuth";
// import useAdmin from "../hooks/useAdmin";

const AdminRoutes = () => {
  const { user, loading } = useAuth();
  const [rawIsAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  // Normalize to boolean in case rawIsAdmin is an object
  const isAdmin =
    rawIsAdmin === true ||
    rawIsAdmin?.isAdmin === true ||
    rawIsAdmin?.admin === true ||
    rawIsAdmin?.role === "admin";

  if (loading || isAdminLoading) return <div>Checking Admin Role...</div>;

  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (isAdmin) return <Outlet />;

  return <Navigate to="/" replace />;
};

export default AdminRoutes;