import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="main-footer py-4 bg-gray-50 dark:bg-dark-600">
      <div className="container flex justify-between items-center mx-auto px-5 text-primary-200 dark:text-slate-200 text-xs">
        <h6 className="flex items-center">
          <Image
            width={50}
            height={20}
            src="/images/logo-full.svg"
            alt="Header Logo"
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
    </footer>
  );
};

export default Footer;
