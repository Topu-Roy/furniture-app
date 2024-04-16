import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Button } from "../ui/button";

export default function FooterLinks() {
  const footerData = [
    {
      headline: "Customer",
      links: [
        {
          name: "Order Status",
          url: "#",
        },
        {
          name: "Collections",
          url: "#",
        },
        {
          name: "Our Story",
          url: "#",
        },
        {
          name: "Affiliates",
          url: "#",
        },
        {
          name: "Security",
          url: "#",
        },
      ],
    },
    {
      headline: "Information",
      links: [
        {
          name: "Customer Service",
          url: "#",
        },
        {
          name: "Terms of condition",
          url: "#",
        },
        {
          name: "Privacy Policy",
          url: "#",
        },
        {
          name: "Careers",
          url: "#",
        },
        {
          name: "FAQ",
          url: "#",
        },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <FaSquareInstagram size={25} className="" />,
      url: "#",
    },
    {
      name: "Facebook",
      icon: <FaFacebookF size={25} className="" />,
      url: "#",
    },
    {
      name: "Twitter",
      icon: <FaTwitter size={25} className="" />,
      url: "#",
    },
    {
      name: "Tiktok",
      icon: <FaTiktok size={25} className="" />,
      url: "#",
    },
  ];

  return (
    <div className="mt-14 w-full bg-gray-950 py-10 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row">
        <div className="w-full space-y-8 pb-4 md:w-1/2 md:pb-0 lg:pl-8 2xl:pl-0">
          <div className="mx-auto space-y-2 px-2 text-center md:pr-14 lg:px-0 lg:text-left">
            <Link href={"/home"}>
              <Heading className="text-primary">Furnit.</Heading>
            </Link>
            <Text size="md" muted={true} className="sm:px-8 md:px-4 lg:px-0">
              Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
              facilisi vivamus proin lit laoreet phasel alilus porttitor inter,
              facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
            </Text>
            <div className="mt-4">
              <Link href={"/shop"}>
                <Button variant={"secondary"}>View furniture's</Button>
              </Link>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-4 lg:justify-start">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.url}
                className="h-10 w-10 rounded-full bg-white/10 p-2 text-gray-300 hover:bg-primary/10 hover:text-primary"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto h-px w-[90%] bg-white/10 md:hidden" />

        <div className="flex flex-1 flex-row px-4 pt-8">
          {footerData.map((item) => (
            <div key={item.headline} className="flex-1 text-center">
              <Text size="xl" className={cn("pb-4 text-white/70")}>
                {item.headline}
              </Text>
              <div className="space-y-3">
                {item.links.map((link) => (
                  <Text
                    key={link.name}
                    size="s"
                    className={cn(
                      "opacity-0.81 tracking-[-0.50px] text-white/60",
                    )}
                  >
                    <Link href={link.url}>
                      <span className="hover:underline">{link.name}</span>
                    </Link>
                  </Text>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
