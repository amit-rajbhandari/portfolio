import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Card } from "@src/components";
import { StyledImage } from "@src/styled-component";
import ProjectOffCanvas from "./project-offcanvas";

const ProjectSection = (props) => {
  const { userData } = props;

  const [showDetail, setShowDetail] = useState();

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
    breakpoints: {
      1280: { arrows: true },
    },
  };

  return (
    <section id="projects" className="js-show-on-scroll py-5 xl:py-28">
      <h2 className="mb-16 text-primary-500 dark:text-primary-100 text-3xl xl:text-5xl text-center">
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
                  root: "project-card group cursor-pointer",
                }}
                onClick={() => setShowDetail(projects)}
              >
                <StyledImage
                  url={projects.image}
                  alt={projects.name}
                  layout="fill"
                />
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

      {showDetail && (
        <ProjectOffCanvas
          data={showDetail}
          handleOnClose={() => setShowDetail(null)}
        />
      )}
    </section>
  );
};

export default ProjectSection;
