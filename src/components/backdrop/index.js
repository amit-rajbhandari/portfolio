import React, { useEffect } from "react";
import reactDom from "react-dom";
import { hideScroll } from "@src/helpers/utils";

const BackDrop = ({ classes, ...props }) => {
  useEffect(() => {
    const defaultHidden = document
      .querySelector("body")
      .classList.contains("scroll-hidden-padding");

    hideScroll(true);

    return () => {
      // remove body class element while unmount
      if (!defaultHidden) {
        hideScroll(false);
      }
    };
  });

  return reactDom.createPortal(
    <div
      className={`w-full h-full fixed top-0 left-0 z-[71] bg-dark-500/90 backdrop-blur-sm 
      ${classes || ""}`}
      {...props}
    />,
    document.getElementById("__next")
  );
};

export default BackDrop;
