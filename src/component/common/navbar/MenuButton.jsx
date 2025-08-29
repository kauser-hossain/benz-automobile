const MenuButton = ({ isOpen, toggle }) => (
  <button
    className="md:hidden text-gray-700 dark:text-gray-300 focus:outline-none"
    onClick={toggle}
    aria-label="Toggle Menu"
    aria-expanded={isOpen ? "true" : "false"}
  >
    {isOpen ? (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 8h16M4 16h16"
        />
      </svg>
    )}
  </button>
);

export default MenuButton;
