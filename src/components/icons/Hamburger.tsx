type HamburgerProps = {
  className?: string;
  openMenu: boolean;
};

const Hamburger = ({ className, openMenu }: HamburgerProps) => {
  return (
    <div
      className={`relative flex h-[50px] w-[50px] transform items-center justify-center overflow-hidden rounded-full shadow-md ring-0 transition-all duration-200 ${className}`}
    >
      <div className="flex h-[20px] w-[20px] origin-center transform flex-col justify-between overflow-hidden transition-all duration-300">
        <div
          className={`h-[2px] w-7 origin-left transform bg-white transition-all delay-100 duration-300 ${openMenu && "translate-y-6"}`}
        ></div>
        <div
          className={`h-[2px] w-7 transform rounded bg-white transition-all delay-75 duration-300 ${openMenu && "translate-y-6"}`}
        ></div>
        <div
          className={`h-[2px] w-7 origin-left transform bg-white transition-all duration-300 ${openMenu && "translate-y-6"}`}
        ></div>

        <div
          className={`absolute top-2.5 flex w-0 -translate-x-10 transform items-center justify-between transition-all duration-500 ${openMenu && "w-12 translate-x-0"}`}
        >
          <div
            className={`absolute h-[2px] w-5 rotate-0 transform bg-white transition-all delay-300 duration-500 ${openMenu && "rotate-45"}`}
          ></div>
          <div
            className={`absolute h-[2px] w-5 -rotate-0 transform bg-white transition-all delay-300 duration-500 ${openMenu && "-rotate-45"}`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
