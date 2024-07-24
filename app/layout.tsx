import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huỳnh Đại Nguyên Portfolio",
  description: "A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title></title>
        <meta name="keywords" content={"ReactJS, NextJS, Frontend"} />
        <meta property="og:title" content={"Huỳnh Đại Nguyên Portfolio"} />
        <meta property="og:description" content={"A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency."} />
        <meta property="og:url" content={"https://nguyenhd.herimaniac.click/"} />
        <meta property="og:image" content={"./avatar.jpg"} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={"Huỳnh Đại Nguyên Portfolio"} />
        <meta name="twitter:description" content={"A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency."} />
        <meta name="twitter:image" content={"./avatar.jpg"} />
        <meta name="twitter:url" content={"https://nguyenhd.herimaniac.click/"} />
        <link rel="canonical" href={"https://nguyenhd.herimaniac.click/"} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}