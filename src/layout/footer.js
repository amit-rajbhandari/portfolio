import React from "react";
import { StyledImage } from "@src/styled-component";

const Footer = (props) => {
  const { theme } = props;

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
            © 2023 All rights reserved
          </span>
        </h6>

        <h6>
          Maintained by{" "}
          <span className="text-primary-500 dark:text-slate-200 font-medium">
            Amit Rajbhandari
          </span>
        </h6>
      </div>
    </footer>
  );
};

export default Footer;
