import { useState } from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import DarkModeToggle from "./DarkModeToggle";
import MenuButton from "./MenuButton";
import MobileMenu from "./MobileMenu";
import Logout from "@/component/logout/Logout";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 py-3 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Logo />
        <Logout />
        <div className="hidden md:flex space-x-8">
          <NavLinks />
        </div>
        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <MenuButton
            isOpen={mobileMenuOpen}
            toggle={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </div>
      </div>
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
