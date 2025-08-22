import React from "react";
import AdminSidebar from "../component/common/AdminSibar/AdminSIdebar";
import AdminNavbar from "../component/common/AdminSibar/AdminNavbar";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <AdminNavbar />
        <div className="p-6 bg-gray-100 flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
