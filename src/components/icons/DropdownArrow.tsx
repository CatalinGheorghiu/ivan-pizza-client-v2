type DropdownArrowProps = {
  className?: string;
};

const DropdownArrow = ({ className }: DropdownArrowProps) => {
  return (
    <svg
      className={`transition-all duration-300 ${className}`}
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M6 9L12 15 18 9"></path>
    </svg>
  );
};

export default DropdownArrow;
