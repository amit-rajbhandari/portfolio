import React, { useEffect, useState } from "react";
import Link from "next/link";
import useScrollPosition from "@src/hooks/useScrollPosition";
import { IconBarcode, IconCode, IconExperince, IconPhone } from "@src/svg";
import { StyledImage } from "@src/styled-component";
import { MediaBreakpoints } from "@src/configs/breakpoints";

const MobileNavigator = () => {
  const windowWidth = window.innerWidth;
  const scrollPos = useScrollPosition();

  const [activeSection, setActiveSection] = useState("About");

  const onNavigateView = (view) => {
    setActiveSection(view);
  };

  useEffect(() => {
    if (activeSection) {
      localStorage.setItem("activeNav", activeSection);
    }
  }, [activeSection]);

  return (
    <section className={`mobile-nav-wrapper ${scrollPos > 96 ? "!flex" : ""}`}>
      <nav
        className={`mobile-nav 
        ${windowWidth >= MediaBreakpoints.xl && scrollPos > 96 ? "animate-in" : ""}
        ${windowWidth < MediaBreakpoints.xl ? "animate-in" : ""}
        `}
      >
        <Link
          href="#services"
          className={`${activeSection === "Services" ? "active" : ""}`}
          onClick={() => onNavigateView("Services")}
        >
          <IconBarcode /> Services
        </Link>

        <Link
          href="#experience"
          className={`${activeSection === "Experience" ? "active" : ""}`}
          onClick={() => onNavigateView("Experience")}
        >
          <IconExperince />
          Experience
        </Link>

        <span className="logo-hexa">
          <Link href="#about" onClick={() => onNavigateView("About")}>
            <StyledImage
              width={120}
              height={120}
              url="/images/hexa-logo.svg"
              alt="Hexa Logo"
              placeholder=""
            />
          </Link>
        </span>

        <Link
          href="#projects"
          onClick={() => onNavigateView("Projects")}
          className={`${activeSection === "Projects" ? "active" : ""}`}
        >
          <IconCode />
          Projects
        </Link>

        <Link
          href="#contact"
          className={`${activeSection === "Contact" ? "active" : ""}`}
          onClick={() => onNavigateView("Contact")}
        >
          <IconPhone />
          Contact
        </Link>
      </nav>
    </section>
  );
};

export default MobileNavigator;
