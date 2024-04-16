import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

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
    <div className="mt-14 w-full bg-gray-900 py-10 lg:py-16">
      <div className="mx-auto flex max-w-7xl flex-row gap-4">
        <div className="w-1/2">
          <Link href={"/home"}>
            <Heading className={cn("text-primary")}>Furnit.</Heading>
          </Link>
          <Text size="s" muted={true} className="">
            Lorem ipsum dolor sit amet litam consectetur adipiscing elit,
            facilisi vivamus proin lit laoreet phasel alilus porttitor inter,
            facilisis condiment tarime egestas rhoncus dapibus iaculis alemir.
          </Text>
          <div className="flex items-center justify-start gap-4 pt-16">
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

        <div className="flex flex-1 flex-row">
          {footerData.map((item) => (
            <div key={item.headline} className="flex-1">
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
                    <Link href={link.url}>{link.name}</Link>
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
