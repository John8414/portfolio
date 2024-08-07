import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Huỳnh Đại Nguyên Frontend Developer",
  description: "A Frontend Developer with experience in develop, and maintaining responsive web app",
  twitter: {
    card: "summary_large_image",
    title: "Huỳnh Đại Nguyên Frontend Developer",
    description: "A Frontend Developer with experience in develop, and maintaining responsive web app",
    images: [{
      url: "https://nguyenhd.herimaniac.click/avatar.jpg",
      width: 1200,
      height: 630,
      alt: "Huỳnh Đại Nguyên Frontend Developer"
    }],
    siteId: "https://nguyenhd.herimaniac.click/"
  },
  openGraph: {
    type: "website",
    url: "https://nguyenhd.herimaniac.click/",
    title: "Huỳnh Đại Nguyên Frontend Developer",
    description: "A Frontend Developer with experience in develop, and maintaining responsive web app",
    images: [{
      url: "https://nguyenhd.herimaniac.click/avatar.jpg",
      width: 1200,
      height: 630,
      alt: "Huỳnh Đại Nguyên Frontend Developer"
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
        <title>Huỳnh Đại Nguyên Frontend Developer</title>
        <meta name="description" content="A Frontend Developer with experience in develop, and maintaining responsive web app" />
        <meta name="keywords" content={"ReactJS, NextJS, Frontend"} />
        <meta property="og:title" content={"Huỳnh Đại Nguyên Frontend Developer"} />
        <meta property="og:description" content={"A Frontend Developer with experience in develop, and maintaining responsive web app"} />
        <meta property="og:url" content={"https://nguyenhd.herimaniac.click/"} />
        <meta property="og:image" content={"https://nguyenhd.herimaniac.click/avatar.jpg"} />
        <meta content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no" name="viewport" />
        <link rel="canonical" href={"https://nguyenhd.herimaniac.click/"} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}