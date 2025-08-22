import React from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const AdminNavbar = () => {
  return (
    <div className="h-16 bg-white shadow flex items-center px-6 justify-between">
      {/* Search Bar */}
      <div className="relative w-96">
        <Search className="absolute left-2 top-2.5 text-gray-500 w-5 h-5" />
        <Input
          type="text"
          placeholder="Search..."
          className="pl-8 pr-4 py-2 border rounded-lg w-full"
        />
      </div>

      {/* Profile Info */}
      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <span className="font-medium">Admin</span>
      </div>
    </div>
  );
};

export default AdminNavbar;


