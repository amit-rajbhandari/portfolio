import { MediaBreakpoints } from "@src/configs/breakpoints";

let previousWindowScrollPos = 0;

export const hideScroll = (scroll) => {
  const body = document.querySelector("body");
  const root = document.querySelector("#__next");
  const scrollVal = document.documentElement.scrollTop;

  if (scroll) {
    previousWindowScrollPos = scrollVal;
    body.style.top = `-${scrollVal}px`;
    // body.classList.add("fixed");

    if (
      window.innerWidth >= MediaBreakpoints.xl &&
      root.scrollHeight > root.clientHeight
    ) {
      body.classList.add("overflow-y-hidden");
    } else if ("ontouchstart" in window || navigator.maxTouchPoints) {
      // Check If Touch Device
      body.classList.add("overflow-hidden");
    } else {
      body.classList.add("overflow-hidden");
    }
  } else {
    body.classList.remove("overflow-hidden", "overflow-y-hidden");
    body.removeAttribute("style");
    window.scrollTo(0, previousWindowScrollPos);
  }
};
