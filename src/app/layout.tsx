import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import NavBar from "@/app/_components/NavBar";
import Footer from "@/app/_components/Footer";
import { inter } from "@/styles/font";
import { Toaster } from "@/components/ui/toaster";
import { TRPCReactProvider } from "@/trpc/react";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";
import { CartStoreProvider } from "@/zustand/provider/cartStoreProvider";

export const metadata: Metadata = {
  title: "Furnit",
  description: "Decorate your house with beautiful furniture's.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} relative`}>
          //* This is for uploadthing ssr hydration
          <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />
          <TRPCReactProvider>
            <CartStoreProvider>
              <NavBar />
              {children}
            </CartStoreProvider>
            <Footer />
            <Toaster />
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
