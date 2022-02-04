import React from "react";
import Link from "next/link";

const before =
  "before:w-3 before:h-full before:absolute before:top-1/2 before:-left-3 before:rounded-bl-3xl before:rounded-tl-3xl before:border-r-0 before:border before:border-solid before:border-primary-500 dark:before:border-red-500 before:opacity-0 before:content-[''] before:-translate-y-1/2 before:transition-all before:duration-[600ms] before:ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)]";
const after =
  "after:w-3 after:h-full after:absolute after:top-1/2 after:-right-3 after:rounded-br-3xl after:rounded-tr-3xl after:border-l-0 after:border after:border-solid after:border-primary-500 dark:after:border-red-500 after:opacity-0 after:content-[''] after:-translate-y-1/2 after:transition-all after:duration-[600ms] after:ease-[cubic-bezier(0.68, -0.6, 0.32, 1.6)]";
const activeStyle =
  "text-primary-500 dark:text-red-500 before:opacity-100 before:left-0 after:opacity-100 after:right-0";
const hover = "hover:text-red-500 hover:before:w-1/2 hover:after:w-1/2";

const StyledLink = (props) => {
  const { url, isActive, classes, children, ...others } = props;
  return (
    <Link href={url} passHref>
      <a
        href="replace"
        className={`inline-flex justify-center items-center relative px-4 rounded-3xl font-medium transition-all duration-700 ${before} ${after} ${hover}
        ${isActive ? activeStyle : ""}
        ${classes || ""}`}
        {...others}
      >
        {children}
      </a>
    </Link>
  );
};

export default StyledLink;
