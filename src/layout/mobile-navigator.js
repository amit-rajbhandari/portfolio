import React, { useEffect, useState } from "react";
import Link from "next/link";
import { IconBarcode, IconCode, IconExperince, IconPhone } from "@src/svg";
import { StyledImage } from "@src/styled-component";

const MobileNavigator = () => {
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
    <nav className="mobile-nav">
      <Link href="#services" passHref>
        <a
          href="replace"
          className={`${activeSection === "Services" ? "active" : ""}`}
          onClick={() => onNavigateView("Services")}
        >
          <IconBarcode /> Services
        </a>
      </Link>

      <Link href="#experience" passHref>
        <a
          href="replace"
          className={`${activeSection === "Experience" ? "active" : ""}`}
          onClick={() => onNavigateView("Experience")}
        >
          <IconExperince />
          Experience
        </a>
      </Link>

      <span className="logo-hexa">
        <Link href="#about" passHref>
          <a href="replace" onClick={() => onNavigateView("About")}>
            <StyledImage
              width={120}
              height={120}
              url="/images/hexa-logo.svg"
              alt="Hexa Logo"
              placeholder=""
            />
          </a>
        </Link>
      </span>

      <Link href="#projects" passHref>
        <a
          href="replace"
          onClick={() => onNavigateView("Projects")}
          className={`${activeSection === "Projects" ? "active" : ""}`}
        >
          <IconCode />
          Projects
        </a>
      </Link>

      <Link href="#contact" passHref>
        <a
          href="replace"
          className={`${activeSection === "Contact" ? "active" : ""}`}
          onClick={() => onNavigateView("Contact")}
        >
          <IconPhone />
          Contact
        </a>
      </Link>
    </nav>
  );
};

export default MobileNavigator;
