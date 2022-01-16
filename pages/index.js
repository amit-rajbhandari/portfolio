import React from "react";
import Layout from "@src/layout";
import { PageMeta } from "@src/components";
import userData from "@constants/data";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <PageMeta />

      <main className="main pt-20">
        <section
          id="about"
          className="h-[calc(100vh-5rem)] flex relative pt-10 z-1"
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

          <div className="container flex flex-col flex-1 mx-auto px-5">
            <div className="flex justify-between items-center">
              <h2 className="text-primary-700 dark:text-slate-200 text-7xl font-semibold leading-normal">
                Hey There, <br />
                I&apos;m {userData.name}
              </h2>

              <h4 className="flex text-5xl font-bold">
                {userData.experience[0].totalExperience}
                <span className="ml-3 text-base font-medium">
                  YEARS <br />
                  EXPERINCE
                </span>
              </h4>
            </div>

            <div className="flex-1 grid grid-cols-3 relative -z-1">
              <div className="flex flex-col justify-center space-y-20">
                <h4>
                  Email
                  <Link href={`mailto:${userData.email}`} passHref>
                    <a
                      href="replace"
                      className="block text-red-500 font-medium"
                    >
                      {userData.email}
                    </a>
                  </Link>
                </h4>

                <figure className="flex flex-wrap m-0 gap-8">
                  {userData.tools.map((item) => {
                    return (
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
                    );
                  })}
                </figure>
              </div>

              <figure className="h-full relative">
                <Image
                  src={userData.bannerUrl}
                  alt="Amit Rajbhandari"
                  layout="fill"
                />
              </figure>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

Home.Layout = Layout;
export default Home;
