import { ReactNode } from "react";

import Footer from "@/components/layout/Footer.tsx";
import Header from "@/components/layout/header/Header.tsx";

type LayoutProps = { children: ReactNode };

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main className="relative mx-auto flex h-full max-w-screen-xl flex-col px-4 md:px-10">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
