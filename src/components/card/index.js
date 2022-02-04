import React from "react";

const Card = (props) => {
  const { classes, children, ...other } = props;
  return (
    <div
      className={`py-6 px-7 border border-solid border-slate-100 dark:border-slate-600 rounded-xl bg-white dark:bg-[#43435E]
      ${classes?.root || ""}`}
      {...other}
    >
      {children}
    </div>
  );
};

export default Card;
