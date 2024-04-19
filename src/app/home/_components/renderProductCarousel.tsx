"use client";
import React, { useEffect, useState } from "react";
import { products } from "@/assets/productArray";
import useDeviceWidth from "@/hooks/windowDimensions";
import WideScreenProductCarousel from "./_carousels/wideScreenProductCarousel";
import DesktopProductCarousel from "./_carousels/desktopProductCarousel";
import MobileProductCarousel from "./_carousels/mobileProductCarousel";
import TabletProductCarousel from "./_carousels/tabletProductCarousel";

export default function RenderProductCarousel() {
  const width = useDeviceWidth();
  const [deviceWidth, setDeviceWidth] = useState(width);
  useEffect(() => {
    setDeviceWidth(width);
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
