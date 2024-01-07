import type { Metadata } from "next";
import "@fontsource/poppins";
import "./globals.css";
import { Navbar, Footer } from "../components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const metadata: Metadata = {
  title: "Food Truck",
  description: "The best food truck in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
