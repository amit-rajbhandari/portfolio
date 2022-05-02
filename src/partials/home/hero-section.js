import React from "react";
import Link from "next/link";
import { StyledImage } from "@src/styled-component";

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

      <div className="container flex flex-col flex-1 mx-auto px-5 z-1">
        <div className="flex flex-wrap justify-between items-center">
          <h1 className="mb-5 xl:mb-0 text-primary-700 dark:text-slate-200 text-3xl xl:text-7xl leading-normal">
            Hey There, <br />
            I&apos;m {userData.name}
          </h1>

          <h4 className="flex text-5xl font-bold">
            {userData.totalExperience}
            <span className="ml-3 text-base font-medium">
              YEARS <br />
              EXPERINCE
            </span>
          </h4>
        </div>

        <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 relative -z-1">
          <div className="hidden xl:flex flex-col justify-center space-y-20">
            <h4>
              Email
              <Link href={`mailto:${userData.email}`} passHref>
                <a href="replace" className="block text-red-500 font-medium">
                  {userData.email}
                </a>
              </Link>
            </h4>

            <figure className="flex flex-wrap m-0 gap-8">
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

          <figure className="h-full relative">
            <StyledImage
              url={userData.bannerUrl}
              alt="Amit Rajbhandari"
              layout="fill"
            />
          </figure>

          <div className="hidden xl:flex flex-col items-end justify-center pb-36">
            <h4 className="mb-5 text-primary-500 dark:text-white text-center">
              Lets Connect
            </h4>
            <figure className="flex flex-wrap m-0 gap-5">
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
