import React from "react";
import Link from "next/link";
import { AnimatedText, StyledImage } from "@src/styled-component";

const HeroSection = (props) => {
  const { userData } = props;
  return (
    <section
      id="about"
      className="h-[calc(100vh-5rem)] flex relative pt-2 xl:pt-10 z-1"
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
          <h2 className="w-1/2 h-36 relative mb-5 text-3xl leading-normal xl:mb-0 text-primary-700 dark:text-slate-200 xl:text-7xl">
            {/* Hey There, <br />
            I&apos;m {userData.name} */}
            <AnimatedText
              text={[`Hey There, <br /> I&apos;m ${userData.name}`]}
              color={["#296f6c"]}
            />
          </h2>

          <h4 className="flex text-5xl font-bold">
            {userData.totalExperience}
            <span className="ml-3 text-base font-medium">
              YEARS <br />
              EXPERINCE
            </span>
          </h4>
        </div>

        <div className="relative grid flex-1 grid-cols-1 xl:grid-cols-3 -z-1">
          <div className="flex-col justify-center hidden space-y-20 xl:flex">
            <h4>
              Email
              <Link href={`mailto:${userData.email}`} passHref>
                <a href="replace" className="block font-medium text-red-500">
                  {userData.email}
                </a>
              </Link>
            </h4>

            <figure className="flex flex-wrap gap-8 m-0">
              {userData.tools.map((item, index) => {
                return (
                  index <= 9 && (
                    <Link key={item.name} href="/" passHref>
                      <a href="replace">
                        <StyledImage
                          width={40}
                          height={40}
                          url={item.image}
                          alt={item.name}
                          placeholder=""
                        />
                      </a>
                    </Link>
                  )
                );
              })}
              <Link href="#more-tools" passHref>
                <a
                  href="replace"
                  className="group flex items-center justify-center self-start relative px-2 text-red-500 text-[2rem] font-semibold leading-none z-1 before:w-full before:h-3.5 before:content-[''] before:absolute before:-bottom-0.5 before:left-0 before:rounded before:shadow-lg before:shadow-yellow-500 before:bg-yellow-500 before:-z-1"
                >
                  <span className="font-normal group-hover:animate-bounce">
                    +
                  </span>{" "}
                  {userData.tools.length - 9}
                </a>
              </Link>
            </figure>
          </div>

          <figure className="relative h-full">
            <StyledImage
              url={userData.bannerUrl}
              alt="Amit Rajbhandari"
              layout="fill"
            />
          </figure>

          <div className="flex-col items-end justify-center hidden xl:flex pb-36">
            <h4 className="mb-5 text-center text-primary-500 dark:text-white">
              Lets Connect
            </h4>
            <figure className="flex flex-wrap gap-5 m-0">
              {userData.socialLinks.map((item) => {
                return (
                  <Link key={item.name} href={item.url} passHref>
                    <a href="replace">
                      <StyledImage
                        width={30}
                        height={30}
                        url={item.icon}
                        alt={item.name}
                        placeholder=""
                      />
                    </a>
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
