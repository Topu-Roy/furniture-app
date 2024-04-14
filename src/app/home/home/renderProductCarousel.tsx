"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/assets/productArray";
import useDeviceWidth from "@/hooks/windowDimensions";
import MobileProductCarousel from "./carousels/mobileProductCarousel";
import TabletProductCarousel from "./carousels/tabletProductCarousel";
import DesktopProductCarousel from "./carousels/desktopProductCarousel";
import WideScreenProductCarousel from "./carousels/wideScreenProductCarousel";

export default function RenderProductCarousel() {
  const width = useDeviceWidth();
  const [deviceWidth, setDeviceWidth] = useState(width);
  useEffect(() => {
    setDeviceWidth(width);
    console.log(width);
  }, [width]);

  if (deviceWidth >= 1280) {
    return <WideScreenProductCarousel products={products} />;
  }

  if (deviceWidth >= 1024) {
    return <DesktopProductCarousel products={products} />;
  }

  if (deviceWidth >= 768) {
    return <TabletProductCarousel products={products} />;
  }

  return (
    <>
      <MobileProductCarousel products={products} />
    </>
  );
}
