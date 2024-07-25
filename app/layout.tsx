import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huỳnh Đại Nguyên Portfolio",
  description: "A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency.",
  twitter: {
    card: "summary_large_image",
    title: "Huỳnh Đại Nguyên Portfolio",
    description: "A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency.",
    images: "./avatar.jpg",
    siteId: "https://nguyenhd.herimaniac.click/"
  },
  openGraph: {
    type: "website",
    url: "https://nguyenhd.herimaniac.click/",
    title: "Huỳnh Đại Nguyên Portfolio",
    description: "A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency.",
    images: [{
      url: "/avatar.jpg",
      width: 1200,
      height: 630,
      alt: "Huỳnh Đại Nguyên Portfolio"
    }]
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Huỳnh Đại Nguyên Portfolio</title>
        <meta name="description" content="A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency." />
        <meta name="keywords" content={"ReactJS, NextJS, Frontend"} />
        <meta property="og:title" content={"Huỳnh Đại Nguyên Portfolio"} />
        <meta property="og:description" content={"A Frontend Developer with experience in develop, and maintaining responsive web app to enhance user experience and business efficiency."} />
        <meta property="og:url" content={"https://nguyenhd.herimaniac.click/"} />
        <meta property="og:image" content={"./avatar.jpg"} />
        <link rel="canonical" href={"https://nguyenhd.herimaniac.click/"} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}