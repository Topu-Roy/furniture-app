"use client";
import React, { useEffect, useState } from "react";
import useDeviceWidth from "@/hooks/windowDimensions";
import WideScreenProductCarousel from "./_carousels/wideScreenProductCarousel";
import DesktopProductCarousel from "./_carousels/desktopProductCarousel";
import MobileProductCarousel from "./_carousels/mobileProductCarousel";
import TabletProductCarousel from "./_carousels/tabletProductCarousel";
import { Product } from "@prisma/client";

type Props = {
  products: Product[];
};

export default function RenderProductCarousel({ products }: Props) {
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
