import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import React from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout()
      .then(() => {
        localStorage.removeItem("access-token");
        navigate("/login"); // logout এর পর login page এ redirect
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Logout;
