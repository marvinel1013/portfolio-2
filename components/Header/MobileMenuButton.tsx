type Props = {
  open: boolean;
  handleOpenMenu: any;
};

function MobileMenuButton({ open, handleOpenMenu }: Props) {
  return (
    <nav className="md:ml-5 pr-8">
      <button onClick={handleOpenMenu}>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block w-6 h-0.5 rounded-sm ${
            open ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block w-6 h-0.5 rounded-sm my-0.5 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 ease-out block w-6 h-0.5 rounded-sm translate-y-0.5 ${
            open ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
    </nav>
  );
}

export default MobileMenuButton;
