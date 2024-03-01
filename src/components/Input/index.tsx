import React from "react";

const shapes = {
  round: "rounded",
  square: "rounded-[0px]",
} as const;
const variants = {
  fill: {
    gray_50_01: "bg-gray-50_01 text-black-900_3f",
    white_A700: "bg-white-A700 text-gray-500",
  },
  outline: {
    gray_500: "border-gray-500 border border-solid text-gray-500",
    blue_gray_100: "border-blue_gray-100 border border-solid text-gray-500",
  },
} as const;
const sizes = {
  sm: "h-[45px] pl-[17px] pr-[35px] text-sm",
  md: "h-[49px] pl-4 pr-[35px] text-sm",
  xs: "h-[38px] pl-2 pr-[35px] text-lg",
  lg: "h-[55px] pl-[22px] pr-[35px] text-sm",
  xl: "h-[59px] pl-[18px] pr-[35px] text-sm",
  "2xl": "h-[69px] pl-5 pr-[35px] text-lg",
} as const;

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  "size" | "prefix" | "type" | "onChange"
> &
  Partial<{
    className: string;
    name: string;
    placeholder: string;
    type: string;
    label: string;
    prefix: React.ReactNode;
    suffix: React.ReactNode;
    onChange: Function;
    shape: keyof typeof shapes;
    variant: keyof typeof variants;
    size: keyof typeof sizes;
    color: string;
  }>;
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "square",
      variant = "fill",
      size = "2xl",
      color = "white_A700",
      ...restProps
    },
    ref,
  ) => {
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center tracking-[-0.50px] ${shapes[shape] || ""} ${variants[variant]?.[color as keyof (typeof variants)[typeof variant]] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

export { Input };
