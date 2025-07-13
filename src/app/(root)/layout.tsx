import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}

      <div className="relative z-10">

        <Footer />
      </div>
    </>
  );
};

export default Layout;
