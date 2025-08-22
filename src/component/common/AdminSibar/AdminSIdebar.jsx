import React from "react";
import { Link } from "react-router";
import { Home, Users, Wrench, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";

const AdminSidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      <nav className="flex flex-col gap-3 flex-1">
        <Link
          to="/dashboard"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition"
        >
          <Home className="w-5 h-5" /> Dashboard
        </Link>
        <Link
          to="/dashboard/addservice"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition"
        >
          <Wrench className="w-5 h-5" /> Add Service
        </Link>
        <Link
          to="/dashboard/manage-service"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition"
        >
          <Wrench className="w-5 h-5" /> Manage Service
        </Link>
        <Link
          to="/dashboard/allusers"
          className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-700 transition"
        >
          <Users className="w-5 h-5" /> All Users
        </Link>
      </nav>

      <LogoutButton />
    </div>
  );
};

const LogoutButton = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem("access-token");
        window.location.href = "/login";
      })
      .catch((err) => console.error(err));
  };

  return (
    <Button
      variant="destructive"
      className="flex items-center gap-2 w-full"
      onClick={handleLogout}
    >
      <LogOut className="w-5 h-5" /> Logout
    </Button>
  );
};

export default AdminSidebar;
