import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import NavBar from "@/app/_components/NavBar";
import Footer from "@/app/_components/Footer";
import { inter } from "@/styles/font";

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
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
