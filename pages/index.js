import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Layout from "@src/layout";
import userData from "@constants/data";
import { Card, PageMeta } from "@src/components";
import StyledLink from "@src/components/styled-link";

const Home = () => {
  const projectSlideOtion = {
    autoplay: true,
    perPage: 1,
    type: "slide",
    focus: window.innerWidth >= 1280 ? "center" : "",
    fixedWidth: window.innerWidth >= 1280 ? 620 : "",
    gap: window.innerWidth >= 1280 ? "-3px" : "3rem",
    arrows: false,
    pagination: false,
    rewind: true,
  };

  const toolsSlideOtion = {
    autoplay: true,
    type: "loop",
    perPage: 1,
    focus: "center",
    fixedWidth: 40,
    gap: "4rem",
    arrows: false,
    pagination: false,
    rewind: true,
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      // Get all the elements you want to show on scroll
      const targets = document.querySelectorAll(".js-show-on-scroll");
      // Callback for IntersectionObserver
      const callback = (entries) => {
        entries.forEach((entry) => {
          // Is the element in the viewport?
          if (entry.isIntersecting) {
            // Add the fadeInTop class:
            entry.target.classList.add("motion-safe:animate-fadeInTop");
          }
        });
      };
      // Set up a new observer
      const observer = new IntersectionObserver(callback, {
        threshold: 0.25,
      });
      // Loop through each of the target
      targets.forEach((target) => {
        // Hide the element
        target.classList.add("opacity-0");
        // Add the element to the watcher
        observer.observe(target);
      });
    });
  }, []);
  return (
    <>
      <PageMeta />

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
                          <Image
                            width={40}
                            height={40}
                            src={item.image}
                            alt={item.name}
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
              <Image
                src={userData.bannerUrl}
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
                        <Image
                          width={30}
                          height={30}
                          src={item.icon}
                          alt={item.name}
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

      <section id="services" className="py-28">
        <div className="container grid grid-cols-1 xl:grid-cols-12">
          <div className="xl:col-start-3 xl:col-end-11">
            <div className="grid grid-cols-12 xl:gap-20">
              <div className="order-2 xl:order-1 col-span-12 xl:col-span-6 space-y-5">
                {userData.services.map((service) => {
                  return (
                    <Card
                      key={service.name}
                      classes={{
                        root: "flex items-center gap-8 transition-all hover:shadow-lg",
                      }}
                    >
                      <Image
                        src={service.icon}
                        alt={service.name}
                        width={70}
                        height={70}
                      />
                      <h4 className="text-primary-700 dark:text-primary-100 text-lg font-exo font-semibold">
                        {service.name}
                        <small className="block text-slate-400 dark:text-slate-100 text-sm font-exo2 font-medium">
                          {service.total} projects
                        </small>
                      </h4>
                    </Card>
                  );
                })}
              </div>

              <div className="order-1 xl:order-2 col-span-12 xl:col-span-6 mb-7 xl:mb-0 text-slate-700 dark:text-slate-200 leading-loose">
                <h2 className="mb-10 text-primary-900 dark:text-primary-100 text-5xl text-center">
                  How Do I Help?
                </h2>
                <p className="mb-5">
                  I will help you with finding a solution and solve your
                  problems, I use process{" "}
                  <span className="text-red-400 font-medium">Mobile First</span>{" "}
                  coding pattern to simplify the User Experinces in handheld
                  devices.
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Asperiores assumenda nihil consequatur libero quidem eaque
                  odio laborum repellat mollitia illum eius veniam velit
                  distinctio veritatis et, eveniet commodi sit eum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="js-show-on-scroll py-28">
        <div className="container grid grid-cols-1 xl:grid-cols-12">
          <div className="xl:col-start-3 xl:col-end-11">
            <h2 className="mb-16 text-primary-500 dark:text-primary-100 text-5xl text-center">
              My Work Experience
            </h2>

            <ul className="experience-timeline">
              {userData.experience.map((data) => {
                return (
                  <li key={data.company} className="grid grid-cols-12 gap-5">
                    <h5 className="col-span-12 xl:col-span-4 text-lg text-primary-500 dark:text-primary-100">
                      {data.company}
                      <small className="block">
                        {data.startDate} - {data.endDate}
                      </small>
                    </h5>
                    <span className="seprator">
                      <span />
                    </span>
                    <p className="col-span-12 xl:col-span-7">{data.desc}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section id="projects" className="js-show-on-scroll py-28">
        <h2 className="mb-16 text-primary-500 dark:text-primary-100 text-5xl text-center">
          My Latest Works
          <small className="block mt-3 text-sm font-normal">
            Perfect solution for digital experince
          </small>
        </h2>

        <Splide options={projectSlideOtion}>
          {userData.project.map((projects) => {
            return (
              <SplideSlide
                key={projects.name}
                className="py-5 xl:py-16 px-5 xl:px-0"
              >
                <Card
                  classes={{
                    root: "project-card group",
                  }}
                >
                  <Image src={projects.image} layout="fill" />
                  <h4>{projects.name}</h4>
                  {/* eslint-disable-next-line react/no-danger */}
                  <p dangerouslySetInnerHTML={{ __html: projects.desc }} />
                  <div className="tools">
                    {projects.tools.map((tool) => {
                      return (
                        <span
                          key={tool}
                          className="px-1 py-1 rounded bg-red-500 text-white text-xs"
                        >
                          {tool}
                        </span>
                      );
                    })}
                  </div>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </section>

      <section id="more-tools" className="js-show-on-scroll py-28">
        <div className="container">
          <Splide options={toolsSlideOtion}>
            {userData.tools.map((item) => {
              return (
                <SplideSlide key={item.name}>
                  <figure className="flex">
                    <Link href="/" passHref>
                      <a
                        href="replace"
                        className="transition-all duration-500 hover:rotate-[360deg]"
                      >
                        <Image
                          width={40}
                          height={40}
                          src={item.image}
                          alt={item.name}
                        />
                      </a>
                    </Link>
                  </figure>
                </SplideSlide>
              );
            })}
          </Splide>
        </div>
      </section>

      <section id="contact" className="js-show-on-scroll py-32 pb-20">
        <div className="container grid grid-cols-1 xl:grid-cols-12">
          <div className="xl:col-start-3 xl:col-end-11">
            <Card
              classes={{
                root: "grid grid-cols-12 xl:gap-20 !py-14 !px-10 bg-aurora-bg bg-cover bg-center !bg-slate-100 dark:!bg-[#43435E]",
              }}
            >
              <div className="col-span-12 xl:col-span-8">
                <h2 className="mb-6 text-primary-500 dark:text-primary-100">
                  Let&apos;s work together on your next project
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                  Don&apos;t wait untill tomorrow. Let&apos;s talk today and
                  learn how to start leveraging your business.
                </p>
              </div>

              <div className="col-span-12 xl:col-span-3 flex flex-col items-center justify-center ">
                <h3 className="mb-4">Start by</h3>
                <StyledLink url="/" isActive>
                  saying hi
                </StyledLink>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

Home.Layout = Layout;
export default Home;
