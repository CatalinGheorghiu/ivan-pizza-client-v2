import HeaderDesktop from "@/components/layout/header/HeaderDesktop.tsx";
import HeaderMobile from "@/components/layout/header/HeaderMobile.tsx";

const Header = () => {
  return (
    <header className="relative p-6 md:p-8">
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
};

export default Header;
