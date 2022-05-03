import React, { useEffect } from "react";

const AnimatedText = (props) => {
  const { text, color, recurrsiveAnim = false } = props;

  const animText = (words, id, colors) => {
    const selectedColor = colors === undefined ? ["#fff"] : colors;
    let letterCount = 1;
    let x = 1;
    let waiting = false;
    const target = document.getElementById(id);
    target.setAttribute("style", `color:${selectedColor[0]}`);

    const runAnim = window.setInterval(() => {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(() => {
          const usedColor = selectedColor.shift();
          selectedColor.push(usedColor);
          const usedWord = words.shift();
          words.push(usedWord);
          x = 1;
          target.setAttribute("style", `color:${selectedColor[0]}`);
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (
        recurrsiveAnim &&
        letterCount === words[0].length + 1 &&
        waiting === false
      ) {
        waiting = true;
        window.setTimeout(() => {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }

      if (!recurrsiveAnim && letterCount === words[0].length + 1) {
        clearInterval(runAnim);
      }
    }, 150);
  };

  useEffect(() => {
    if(color){
      animText(text, "text", color);
    }
  }, [color]);

  return (
    <span className="w-full h-full block absolute top-0 left-0 right-0 bottom-0">
      <span id="text" />
      <span
        className="inline-block relative top[-0.14rem] left-[10px] animate-cursor"
        id="console"
      >
        &#95;
      </span>
    </span>
  );
};

export default AnimatedText;
