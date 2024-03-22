import React from "react";
import { poppins } from "@/styles/font";

const sizes = {
  "3xl": "text-[40px] font-bold",
  "2xl": "text-4xl font-bold",
  xl: "text-[32px] font-bold leading-[38px]",
  s: "text-lg font-semibold",
  md: "text-xl font-semibold leading-6",
  xs: "text-base font-bold leading-[19px]",
  lg: "text-2xl font-bold leading-[29px]",
};

export type HeadingProps = Partial<{
  className: string;
  size: keyof typeof sizes;
}>;

const Heading: React.FC<React.PropsWithChildren<HeadingProps>> = ({
  children,
  className = "",
  size = "md",
  ...restProps
}) => {
  return (
    <h2
      className={`text-black-900 ${className} ${sizes[size]} ${poppins.className}`}
      {...restProps}
    >
      {children}
    </h2>
  );
};

export { Heading };
