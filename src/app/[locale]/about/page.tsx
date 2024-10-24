import Banner from "@/components/about/banner";
import Contact from "@/components/contact";
import CustomerReviews from "@/components/customerReviews";
import { Metadata } from "next";
import React from "react";
import initTranslations from "@/app/i18n";

export const metadata: Metadata = {
  title: "About Us - Used Cars in Waterloo, ON | Tricity Auto",
  description:
    "Get used cars in Waterloo with flexible financing at Tricity Auto. Find top brands, rebuild credit, and enjoy easy approvals with free delivery",
  authors: [
    { name: "Tricity Auto Finance", url: "https://www.tricityautofinance.com" },
  ],
  openGraph: {
    title: "About Us - Used Cars in Waterloo, ON | Tricity Auto",
    description:
      "Get used cars in Waterloo with flexible financing at Tricity Auto. Find top brands, rebuild credit, and enjoy easy approvals with free delivery",
    url: "https://www.tricityautofinance.com/about",
    siteName: "Tricity Auto",
    images: [
      {
        url: "https://www.tricityautofinance.com/assets/images/tricity-auto-social-media-img.png",
        width: 1200,
        height: 630,
        alt: "Tricity Auto logo, used cars in Waterloo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Used Cars in Waterloo, ON | Tricity Auto",
    description:
      "Get used cars in Waterloo with flexible financing at Tricity Auto. Find top brands, rebuild credit, and enjoy easy approvals with free delivery",
    creator: "@tricityauto",
    images: [
      "https://www.tricityautofinance.com/assets/images/tricity-auto-social-media-img.png",
    ],
  },
  robots: {
    index: true, // Allow the page to be indexed.
    follow: true, // Follow links on the page.
  },
  metadataBase: new URL("https://www.tricityautofinance.com"),
  alternates: {
    canonical: "./",
  },
};

const About = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, [
    "about",
    "buttons",
    "review",
    "contact",
    "whyUs",
  ]);

  return (
    <>
      <main>
        <Banner t={t} />
        <CustomerReviews t={t} />
        <Contact t={t} />
      </main>
    </>
  );
};

export default About;
