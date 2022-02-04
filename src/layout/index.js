import React from "react";
import { useTheme } from "next-themes";
import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  const { children } = props;
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <main className={`main pt-20 section-divider ${theme}`}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
