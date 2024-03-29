import type { Metadata } from "next";
import { Ubuntu, Work_Sans } from "next/font/google";
import "./globals.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/footer";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--headline-font",
});

const work_sans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "700"],
  variable: "--body-font",
});

export const metadata: Metadata = {
  title: "Bókhald og Skattframtal",
  description:
    "Vefsson bókhaldsþjónusta sér um launavinnslu, bókhald, fjármálastjórnun, skila ársreikningum, skattframtal, fyrirtækjaráðgjöf, áætlanagerð, stofnun félaga og erfðafjárskýrslur",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${ubuntu.variable} ${work_sans.variable}`}>
        <Header />
        <main className="text-fontBlue pt-[90px] xs:pt-[100px] md:pt-[120px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
