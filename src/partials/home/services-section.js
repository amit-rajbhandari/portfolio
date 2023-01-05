import React from "react";
import { Card } from "@src/components";
import { StyledImage } from "@src/styled-component";

const ServicesSection = (props) => {
  const { userData } = props;

  return (
    <section id="services" className="pt-5 pb-24 xl:py-28">
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
                    <figure className="flex-shrink-0">
                      <StyledImage
                        width={70}
                        height={70}
                        url={service.icon}
                        alt={service.name}
                      />
                    </figure>
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
              <h2 className="mb-10 text-primary-900 dark:text-primary-100 text-3xl xl:text-5xl text-center">
                My Approach
              </h2>
              <p className="mb-5 text-base text-justify">
                <span className="block text-primary-500 font-semibold mb-1">
                  01. Research
                </span>
                Understand the client’s needs and requirements completely and
                build on the knowledge related to them. Determine methods to
                address those requirements.
              </p>
              <p className="mb-5 text-base text-justify">
                <span className="block text-primary-500 font-semibold mb-1">
                  02. Design
                </span>
                Create prototypes of a variety of degrees of fidelity to allow
                for more decision-making. The cross functional process includes
                market and technical research.
              </p>
              <p className="text-base text-justify">
                <span className="block text-primary-500 font-semibold mb-1">
                  03. Develop
                </span>
                Utilizing the findings from the research and design phases to
                produce commercial products for the customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
