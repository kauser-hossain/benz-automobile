import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-xl font-semibold text-gray-900 dark:text-white"
    >
      Benz-Automobile
    </Link>
  );
};

export default Logo;
