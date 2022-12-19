import React, { useMemo } from "react";
import Layout from "@src/layout";
import userData from "@constants/data";
import { PageMeta } from "@src/components";
import {
  ContactSection,
  ExperineceSection,
  HeroSection,
  ProjectSection,
  ServicesSection,
  ToolsSection,
} from "@src/partials/home";
import { MediaBreakpoints } from "@src/configs/breakpoints";

const Home = () => {
  const windowWidth = window.innerWidth;

  const activeSection = useMemo(() => {
    return localStorage.getItem("activeNav");
  }, [localStorage.getItem("activeNav")]);

  return (
    <>
      <PageMeta />
      {(windowWidth >= MediaBreakpoints.xl || activeSection === "About") && (
        <HeroSection userData={userData} />
      )}

      {(windowWidth >= MediaBreakpoints.xl || activeSection === "Services") && (
        <ServicesSection userData={userData} />
      )}

      {(windowWidth >= MediaBreakpoints.xl ||
        activeSection === "Experience") && (
        <ExperineceSection userData={userData} />
      )}

      {(windowWidth >= MediaBreakpoints.xl || activeSection === "Projects") && (
        <>
          <ProjectSection userData={userData} />

          <ToolsSection userData={userData} />
        </>
      )}

      {(windowWidth >= MediaBreakpoints.xl || activeSection === "Contact") && (
        <ContactSection userData={userData} />
      )}
    </>
  );
};

Home.Layout = Layout;
export default Home;
