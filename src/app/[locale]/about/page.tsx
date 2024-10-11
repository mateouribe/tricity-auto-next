import Banner from "@/components/about/banner";
import Contact from "@/components/contact";
import CustomerReviews from "@/components/customerReviews";
import { Metadata } from "next";
import React from "react";
import initTranslations from "@/app/i18n";

export const metadata: Metadata = {
  title: "About Tricity Auto Finance - Waterloo, ON Dealership",
  description:
    "Learn more about Tricity Auto, a leading used car dealership in Waterloo, ON dedicated to helping customers rebuild credit and drive home in reliable vehicles.",
  openGraph: {
    title: "About Tricity Auto Finance - Waterloo, ON Dealership",
    description:
      "Learn more about Tricity Auto, a leading used car dealership in Waterloo, ON dedicated to helping customers rebuild credit and drive home in reliable vehicles.",
    url: "https://tricityautofinance.com/about",
    siteName: "Tricity Auto - Waterloo, ON Used Car Dealership",
    locale: "en_US",
    type: "website",
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
    <main>
      <Banner t={t} />
      <CustomerReviews t={t} />
      <Contact t={t} />
    </main>
  );
};

export default About;
