import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { AnimatedText, StyledImage } from "@src/styled-component";

const HeroSection = (props) => {
  const { userData } = props;

  const { resolvedTheme } = useTheme();

  return (
    <section
      id="about"
      className="h-[80vh] xl:h-[calc(100vh-5rem)] flex relative pt-2 xl:pt-10 z-1"
    >
      <div className="aurora-bg">
        <picture>
          <source srcSet="/images/aurora.avif" type="image/avif" />
          <img
            className="dark:hidden"
            src="/images/aurora-bg-light.jpg"
            alt="Aurora BG"
          />

          <img
            className="hidden dark:block"
            src="/images/aurora-bg-dark.jpg"
            alt="Aurora BG"
          />
        </picture>
      </div>

      <div className="container flex flex-col flex-1 px-5 mx-auto z-1">
        <div className="flex flex-wrap items-center justify-between">
          <h2 className="w-full xl:w-1/2 h-24 xl:h-36 relative mb-5 text-3xl leading-normal xl:mb-0 text-primary-700 dark:text-slate-200 xl:text-7xl">
            <AnimatedText
              text={[`Hi there, <br /> I'm ${userData.name}`]}
              color={[resolvedTheme === "dark" ? "#ffffff" : "#296f6c"]}
            />
          </h2>

          <h4 className="flex text-5xl font-bold">
            <span className="flex items-start">
              {userData.totalExperience}{" "}
              <small className="-mt-1 ml-1 text-3xl">+</small>
            </span>
            <span className="ml-3 text-base font-medium">
              YEARS&apos; <br />
              EXPERIENCE
            </span>
          </h4>
        </div>

        <div className="relative grid flex-1 grid-cols-1 xl:grid-cols-3 -z-1">
          <div className="flex-col justify-center hidden space-y-20 xl:flex">
            <h4>
              Email
              <Link
                href={`mailto:${userData.email}`}
                className="block font-medium text-red-500"
              >
                {userData.email}
              </Link>
            </h4>

            <figure className="flex flex-wrap gap-8 m-0">
              {userData.tools.map((item, index) => {
                return (
                  index <= 10 && (
                    <Link key={item.name} href="/">
                      <StyledImage
                        width={40}
                        height={40}
                        url={item.image}
                        alt={item.name}
                        placeholder=""
                      />
                    </Link>
                  )
                );
              })}
              <Link
                href="#more-tools"
                passHref
                className="group flex items-center justify-center self-start relative px-2 text-red-500 text-[2rem] font-semibold leading-none z-1 before:w-full before:h-3.5 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:rounded before:shadow-lg before:shadow-yellow-500 before:bg-yellow-500 before:-z-1"
              >
                <span className="font-normal group-hover:animate-bounce">
                  +
                </span>{" "}
                {userData.tools.length - 10}
              </Link>
            </figure>
          </div>

          <figure className="relative h-full">
            <StyledImage
              url={userData.bannerUrl}
              alt={userData.name}
              layout="fill"
            />
          </figure>

          <div className="flex-col items-end justify-center hidden xl:flex pb-36">
            <h4 className="mb-5 text-center text-primary-500 dark:text-white">
              Let&apos;s Connect
            </h4>
            <figure className="flex flex-wrap gap-5 m-0">
              {userData.socialLinks.map((item) => {
                return (
                  <Link key={item.name} href={item.url} target="_blank">
                    <StyledImage
                      width={30}
                      height={30}
                      url={item.icon}
                      alt={item.name}
                      placeholder=""
                    />
                  </Link>
                );
              })}
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
