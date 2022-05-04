import React, { useEffect, useMemo } from "react";
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

  useEffect(() => {
    window.addEventListener("load", () => {
      // Get all the elements you want to show on scroll
      const targets = document.querySelectorAll(".js-show-on-scroll");
      // Callback for IntersectionObserver
      const callback = (entries) => {
        entries.forEach((entry) => {
          // Is the element in the viewport?
          if (entry.isIntersecting) {
            // Add the fadeInTop class:
            entry.target.classList.add("motion-safe:animate-fadeInTop");
          }
        });
      };
      // Set up a new observer
      const observer = new IntersectionObserver(callback, {
        threshold: 0.25,
      });
      // Loop through each of the target
      targets.forEach((target) => {
        // Hide the element
        target.classList.add("opacity-0");
        // Add the element to the watcher
        observer.observe(target);
      });
    });
  }, []);

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
        <ContactSection />
      )}
    </>
  );
};

Home.Layout = Layout;
export default Home;
