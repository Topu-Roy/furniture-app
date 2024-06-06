import "@/styles/globals.css";

import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { inter } from "@/styles/font";

import { ViewTransitions } from 'next-view-transitions'
import NextTopLoader from 'nextjs-toploader';

export const metadata = {
  title: "Furnit",
  description: "Decorate your house with beautiful furniture's",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang="en" className={`${inter.className}`}>
        <body>
          <NextTopLoader
            color="#c28529"
            showSpinner={false}
          />
          <NavBar />
          {children}
          <Toaster />
          <Footer />
        </body>
      </html>
    </ViewTransitions>
  );
}
