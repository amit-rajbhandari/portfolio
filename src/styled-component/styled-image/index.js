import React from "react";
import Image from "next/image";

const StyledImage = (props) => {
  const { url, placeholder = "blur", ...other } = props;
  return (
    <Image src={url} blurDataURL={url} placeholder={placeholder} {...other} />
  );
};

export default StyledImage;
