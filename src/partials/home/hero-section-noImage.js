import React, { useMemo } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { differenceInYears } from "date-fns";
import { StyledImage } from "@src/styled-component";
import { DotGrid } from "@src/ReactBits";

const HeroSectionNoImage = (props) => {
  const { userData } = props;

  const totalExperience = useMemo(
    () => differenceInYears(new Date(), new Date(userData.startYear)),
    [userData]
  );

  return (
    <section
      id="about"
      className="h-[100vh] flex items-center relative  pt-20 pb-2 xl:pb-10 z-1"
    >
      {/* <div className="aurora-bg">
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
      </div> */}

      <div className="absolute top-0 left-0 w-full h-full">
        <DotGrid
          dotSize={5}
          gap={15}
          baseColor="#fafafa"
          activeColor="#296f6c"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      <div className="container grid flex-1 grid-cols-1 px-5 mx-auto xl:grid-cols-12 z-1">
        <div className="font-mono xl:col-span-5">
          <motion.h6
            className="text-xl font-medium xl:text-xl text-primary-500 dark:text-slate-300"
            whileHover={{ scale: 1.02 }}
          >
            Hi there I&apos;m
          </motion.h6>
          <motion.h2
            className="mt-1 mb-5 text-3xl font-semibold leading-normal xl:text-7xl text-primary-700 dark:text-slate-200"
            whileHover={{ scale: 1.05 }}
          >
            {userData.name}
          </motion.h2>
          <motion.h4
            className="text-3xl font-medium text-primary-400"
            whileHover={{ scale: 1.03 }}
          >
            UI/UX &
            <span className="ml-1.5 text-transparent bg-clip-text bg-gradient-to-r to-primary-200 from-primary-600">
              Front End Developer
            </span>
          </motion.h4>

          <motion.h6 whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={`mailto:${userData.email}`}
              className="block mt-14 font-medium text-red-500"
            >
              {userData.email}
            </Link>
          </motion.h6>

          <h4 className="flex mt-14 text-6xl font-bold">
            <span className="flex items-start text-primary-500 dark:text-slate-200">
              {totalExperience} <small className="-mt-1 ml-1 text-3xl">+</small>
            </span>
            <span className="ml-3 text-lg font-medium text-slate-400">
              YEARS&apos; <br />
              EXPERIENCE
            </span>
          </h4>

          <figure className="flex flex-wrap gap-5 m-0 mt-5">
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

        <div className="flex justify-end items-end xl:col-span-7 xl:pl-48">
          <figure className="flex flex-wrap gap-8 justify-end m-0">
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
              <span className="font-normal group-hover:animate-bounce">+</span>{" "}
              {userData.tools.length - 10}
            </Link>
          </figure>
        </div>

        {/* <div className="grid relative flex-1 grid-cols-1 xl:grid-cols-3 -z-1">
          <div className="hidden flex-col justify-center space-y-20 xl:flex">
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

          <div className="hidden flex-col justify-center items-end pb-36 xl:flex">
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
        </div> */}
      </div>
    </section>
  );
};

export default HeroSectionNoImage;
