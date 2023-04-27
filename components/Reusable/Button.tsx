type Children = {
  children: React.ReactNode;
  className: string;
};

function Button({ children, className }: Children) {
  return (
    <button
      className={`${className} border-2 border-dark dark:border-light dark:bg-light bg-dark font-semibold text-light dark:text-dark duration-300 ease-in dark:hover:bg-transparent hover:bg-transparent dark:hover:text-light hover:text-dark`}
    >
      {children}
    </button>
  );
}

export default Button;
