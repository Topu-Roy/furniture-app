"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { type Product } from "@prisma/client";
import useDeviceWidth from "@/hooks/windowDimensions";

//* Disable SSR for hydration errors
const WideScreenProductCarousel = dynamic(
  () => import("./_carousels/wideScreenProductCarousel"),
  { ssr: false },
);
const DesktopProductCarousel = dynamic(
  () => import("./_carousels/desktopProductCarousel"),
  { ssr: false },
);
const MobileProductCarousel = dynamic(
  () => import("./_carousels/mobileProductCarousel"),
  { ssr: false },
);
const TabletProductCarousel = dynamic(
  () => import("./_carousels/tabletProductCarousel"),
  { ssr: false },
);

type Props = {
  products: Product[];
};

export default function RenderProductCarousel({ products }: Props) {
  const [deviceWidth, setDeviceWidth] = useState<number | null>(null);
  const width = useDeviceWidth();

  useEffect(() => {
    setDeviceWidth(width);
  }, [width]);

  if (deviceWidth === null) {
    return null;
  }

  if (deviceWidth >= 1280) {
    return <WideScreenProductCarousel products={products} />;
  }

  if (deviceWidth >= 1024) {
    return <DesktopProductCarousel products={products} />;
  }

  if (deviceWidth >= 768) {
    return <TabletProductCarousel products={products} />;
  }

  return <MobileProductCarousel products={products} />;
}
