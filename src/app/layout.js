import { Montserrat } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";

import { generateStaticParams } from "@/app/(pages)/blogs/[slug]/page";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sahin's Blogs",
  description: "A collection of blogs by Sahin created using markdown and nextjs static rendering",
};

const searchData = await generateStaticParams();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar searchData={searchData} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
