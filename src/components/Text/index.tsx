import React from "react";

import { Rubik } from "next/font/google";
import type { NextFont } from "next/dist/compiled/@next/font";

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap'
})

const sizes = {
  s: "text-sm font-normal",
  xs: "text-xs font-normal",
  md: "text-base font-normal leading-[19px]",
  lg: "text-lg font-normal",
  xl: "text-xl font-normal",
  max: "text-5xl font-bold"
};

export type TextProps = Partial<{
  className: string;
  font?: NextFont;
  size: keyof typeof sizes;
}>

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className = "",
  font,
  size = "s",
  ...restProps
}) => {

  return (
    <p className={`text-gray-950 ${className} ${sizes[size]} ${font || rubik.className}`} {...restProps}>
      {children}
    </p>
  );
};

export { Text };
