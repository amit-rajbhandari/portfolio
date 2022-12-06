import React from "react";
import Link from "next/link";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { StyledImage } from "@src/styled-component";

const ToolsSection = (props) => {
  const { userData } = props;

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

  return (
    <section id="more-tools" className="js-show-on-scroll py-28">
      <div className="container">
        <Splide options={toolsSlideOtion}>
          {userData.tools.map((item) => {
            return (
              <SplideSlide key={item.name}>
                <figure className="flex">
                  <Link
                    href="/"
                    className="transition-all duration-500 hover:rotate-[360deg]"
                  >
                    <StyledImage
                      width={40}
                      height={40}
                      url={item.image}
                      alt={item.name}
                      placeholder=""
                    />
                  </Link>
                </figure>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </section>
  );
};

export default ToolsSection;
