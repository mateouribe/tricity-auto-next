import Banner from "@/components/about/banner";
import Contact from "@/components/contact";
import CustomerReviews from "@/components/customerReviews";
import { Metadata } from "next";
import React from "react";
import initTranslations from "@/app/i18n";
import Google from "@/components/global/google";

export const metadata: Metadata = {
  title: "Vehicle Financing Solutions in Waterloo, ON - Tricity Auto",
  description:
    "With over 12 years of experience, Tricity Auto specializes in vehicle financing solutions, including bad credit car loans and preferred-rate financing. Apply online today!",
  keywords: [
    "vehicle financing Waterloo",
    "bad credit car loans",
    "car loans Ontario",
    "Buy Here Pay Here Waterloo",
    "online credit application",
    "used car financing Ontario",
  ],
  openGraph: {
    type: "website",
    url: "https://www.tricityauto.com/about",
    title: "Vehicle Financing Solutions in Waterloo, ON | Tricity Auto",
    description:
      "Tricity Auto offers over a decade of experience in automotive financing. Whether you have bad credit or prefer low-interest rates, our online credit application makes approvals easy.",
    images: [
      {
        url: "https://www.tricityauto.com/assets/images/about-us-image.webp",
        width: 1200,
        height: 630,
        alt: "Customer discussing car financing with dealer at Tricity Auto, Waterloo, ON",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Financing Solutions in Waterloo | Tricity Auto",
    description:
      "Get financing solutions for all credit types at Tricity Auto. Apply for car loans online with guaranteed approval!",
    images: ["https://www.tricityauto.com/assets/images/about-us-image.webp"],
  },
  metadataBase: new URL("https://www.tricityauto.com"),
  alternates: {
    canonical: "https://www.tricityauto.com/about",
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
      <Google />
      <main>
        <Banner t={t} />
        <CustomerReviews t={t} />
        <Contact t={t} />
      </main>
    </>
  );
};

export default About;
