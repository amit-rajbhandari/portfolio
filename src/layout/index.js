import React, { useState } from "react";
import { useTheme } from "next-themes";
import Footer from "./footer";
import Header from "./header";

const Layout = (props) => {
  const { children } = props;
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("About");

  return (
    <>
      <Header theme={theme} setTheme={setTheme} activeSection={activeSection} />
      <main className={`main pt-20 pb-24 xl:pb-0 section-divider ${theme}`}>
        {children}
      </main>
      <Footer
        theme={theme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
};

export default Layout;
