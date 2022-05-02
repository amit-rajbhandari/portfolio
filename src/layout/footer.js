import React from "react";
import Link from "next/link";
import { StyledImage } from "@src/styled-component";
import { IconBarcode, IconCode, IconExperince, IconPhone } from "@src/svg";

const Footer = (props) => {
  const { theme, activeSection, setActiveSection } = props;

  return (
    <footer className={`main-footer ${theme}`}>
      <div className="container hidden xl:flex justify-between items-center mx-auto px-5 text-primary-200 dark:text-slate-200 text-xs">
        <h6 className="flex items-center">
          <StyledImage
            width={50}
            height={20}
            url="/images/logo-full.svg"
            alt="Header Logo"
            placeholder=""
          />
          <span className="ml-3 pl-3 border-l border-solid border-primary-500 dark:border-dark-300">
            ©2022. All Rights Reserved
          </span>
        </h6>

        <h6>
          Maintained by{" "}
          <span className="text-primary-500 dark:text-slate-200 font-medium">
            Amit Rajbhandari
          </span>
        </h6>
      </div>

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
          <a href="replace" onClick={() => setActiveSection("Experience")}>
            <IconExperince />
            Experience
          </a>
        </Link>
        <Link href="#projects" passHref>
          <a href="replace" onClick={() => setActiveSection("Projects")}>
            <IconCode />
            Projects
          </a>
        </Link>
        <Link href="#contact" passHref>
          <a href="replace" onClick={() => setActiveSection("Contact")}>
            <IconPhone />
            Contact
          </a>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
