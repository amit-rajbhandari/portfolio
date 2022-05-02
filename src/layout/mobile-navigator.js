import React from "react";
import Link from "next/link";
import { IconBarcode, IconCode, IconExperince, IconPhone } from "@src/svg";
import { StyledImage } from "@src/styled-component";

const MobileNavigator = (props) => {
  const { activeSection, setActiveSection } = props;
  return (
    <nav className="mobile-nav">
      <Link href="#services" passHref>
        <a
          href="replace"
          className={`${activeSection === "Services" ? "active" : ""}`}
          onClick={() => setActiveSection("Services")}
        >
          <IconBarcode /> Services
        </a>
      </Link>

      <Link href="#experience" passHref>
        <a
          href="replace"
          className={`${activeSection === "Experience" ? "active" : ""}`}
          onClick={() => setActiveSection("Experience")}
        >
          <IconExperince />
          Experience
        </a>
      </Link>

      <span className="logo-hexa">
        <Link href="#about" passHref>
          <a href="replace" onClick={() => setActiveSection("About")}>
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
          onClick={() => setActiveSection("Projects")}
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
          onClick={() => setActiveSection("Contact")}
        >
          <IconPhone />
          Contact
        </a>
      </Link>
    </nav>
  );
};

export default MobileNavigator;
