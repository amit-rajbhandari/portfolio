import React, { useEffect, useState } from "react";
import Image from "next/image";
import StyledLink from "@src/components/styled-link";

const Header = (props) => {
  const { activeSection, theme, setTheme } = props;
  const [mounted, setMounted] = useState(false);
  // console.log(theme);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={`main-header ${theme}`}>
      <div className="container flex justify-between items-center mx-auto px-5">
        <h1 className="text-purple-900 dark:text-white text-lg font-medium">
          <Image
            width={window.innerWidth >= 1280 ? 100 : 64}
            height={window.innerWidth >= 1280 ? 50 : 35}
            src="/images/logo-main.svg"
            alt="Header Logo"
          />
        </h1>

        <h4 className="xl:hidden font-medium">{activeSection}</h4>

        <nav className="header-navigation">
          <StyledLink
            classes="mx-6"
            url="#services"
            isActive={activeSection === "about"}
          >
            Services
          </StyledLink>

          <StyledLink classes="mx-6" url="#experience">
            Experince
          </StyledLink>

          <StyledLink classes="mx-6" url="#projects">
            Projects
          </StyledLink>

          <StyledLink classes="mx-6" url="#contact">
            Contact me
          </StyledLink>
        </nav>

        <div className="xl:w-28 relative group">
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="flex items-center p-3 rounded focus:outline-none"
          >
            {mounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="w-4 h-4 flex-shrink-0 xl:mr-3 text-yellow-500 dark:text-yellow-500"
              >
                {theme === "dark" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                )}
              </svg>
            )}
            <span className="hidden xl:block">Theme</span>
          </button>

          <ul className="w-36 hidden absolute top-full right-0 group-hover:block bg-white rounded-lg ring-1 ring-gray-900/10 shadow-lg overflow-hidden py-1 text-sm text-gray-700 font-semibold dark:bg-[#43405F] dark:ring-0 dark:highlight-white/5 dark:text-dark-200">
            <li>
              <button
                className="w-full py-1 px-2 flex items-center cursor-pointer border-0 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-600/30 children:mr-3"
                type="button"
                onClick={() => setTheme("light")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 mr-2"
                >
                  <path
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    className="stroke-gray-400 dark:stroke-dark-100"
                  />
                  <path
                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                    className="stroke-gray-400 dark:stroke-dark-100"
                  />
                </svg>
                Light
              </button>
            </li>
            <li>
              <button
                className="w-full py-1 px-2 flex items-center cursor-pointer border-0 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-600/30 children:mr-3"
                type="button"
                onClick={() => setTheme("dark")}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                    className="fill-transparent"
                  />
                  <path
                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                    className="fill-gray-400 dark:fill-dark-100"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                    className="fill-gray-400 dark:fill-dark-100"
                  />
                </svg>
                Dark
              </button>
            </li>
            <li>
              <button
                className="w-full py-1 px-2 flex items-center cursor-pointer border-0 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-600/30 children:mr-3"
                type="button"
                onClick={() => setTheme("system")}
              >
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 mr-2">
                  <path
                    d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
                    strokeWidth="2"
                    strokeLinejoin="round"
                    className="stroke-dark-100 fill-dark-100/20"
                  />
                  <path
                    d="M14 15c0 3 2 5 2 5H8s2-2 2-5"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="stroke-dark-100"
                  />
                </svg>
                System
              </button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
