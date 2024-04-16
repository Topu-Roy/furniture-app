import React from "react";
import { cn } from "@/lib/utils";
import Newsletter from "./newsletter";
import FooterLinks from "./footerLinks";
import Copyright from "./copyright";

interface Props {
  className?: string;
}

export default function Footer({ className }: Props) {
  return (
    <footer className={cn(`${className} pt-14`)}>
      <div className="px-2">
        <Newsletter />
      </div>
      <FooterLinks />
      <Copyright />
    </footer>
  );
}
