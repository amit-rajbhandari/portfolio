import React from "react";
import Image from "next/legacy/image";

const StyledImage = (props) => {
  const { url, placeholder = "blur", ...other } = props;
  return (
    // <Image src={url} blurDataURL={url} placeholder={placeholder} {...other} />
    <Image src={url} blurDataURL={url} placeholder={placeholder} {...other} />
  );
};

export default StyledImage;
