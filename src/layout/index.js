import React from "react";
import { useTheme } from "next-themes";
import Footer from "./footer";
import Header from "./header";
import MobileNavigator from "./mobile-navigator";

const Layout = (props) => {
  const { children } = props;
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <Header theme={resolvedTheme} setTheme={setTheme} />
      <main className={`main pt-20 section-divider ${resolvedTheme}`}>
        {children}
      </main>
      <Footer theme={resolvedTheme} />

      <MobileNavigator />
    </>
  );
};

export default Layout;
