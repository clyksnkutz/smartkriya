import BackToTop from "@/components/back-to-top";
import FooterTwo from "@/components/footer/footer-two";
import HeaderOne from "@/components/header/header-one";
import MainProvider from "@/components/provider/main-provider";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <MainProvider>
      {/* header area start */}
      <HeaderOne />
      {/* header area end */}

      {/* main content */}
      {children}
      {/* main content */}

      {/* footer area start */}
      <FooterTwo/>
      {/* footer area end */}

      {/* back to top */}
      <BackToTop/>
      {/* back to top */}
    </MainProvider>
  );
}