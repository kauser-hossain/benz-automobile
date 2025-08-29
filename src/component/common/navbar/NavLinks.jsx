import { Link } from "react-router";

const navItems = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/service" },
  { name: "Contact", to: "/contact" },
  { name: "Register", to: "/register" },
  { name: "Login", to: "/login" },
];

const NavLinks = ({ onClick, isMobile = false }) => (
  <>
    {navItems.map((item) => (
      <Link
        key={item.name}
        to={item.to}
        onClick={onClick}
        className={`${
          isMobile
            ? "block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
        } transition`}
      >
        {item.name}
      </Link>
    ))}
  </>
);

export default NavLinks;
