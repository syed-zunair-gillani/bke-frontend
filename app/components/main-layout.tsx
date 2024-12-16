"use client";
import React from "react";
import { SiteProvider } from "../config/context";
import Navigation from "./layout/Navigation";
import Footer from "./layout/Footer";
import { usePathname } from "next/navigation";

const MainLayout = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <>
      <SiteProvider>
        { !pathname.includes("studio") && <Navigation /> }
        {children}
        { !pathname.includes("studio") && <Footer /> }
      </SiteProvider>
    </>
  );
};

export default MainLayout;
