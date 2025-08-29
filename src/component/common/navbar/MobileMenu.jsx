
import NavLinks from "./NavLinks";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden mt-2 space-y-2 px-2" role="menu">
      <NavLinks onClick={onClose} isMobile />
    </div>
  );
};

export default MobileMenu;
