import Banner from "@/components/about/banner";
import Contact from "@/components/contact";
import CustomerReviews from "@/components/customerReviews";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About Tricity Auto Finance - Waterloo, ON Dealership",
  description:
    "Learn more about Tricity Auto, a leading used car dealership in Waterloo dedicated to helping customers rebuild credit and drive home in reliable vehicles.",
  openGraph: {
    title: "About Tricity Auto Finance - Waterloo, ON Dealership",
    description:
      "Learn more about Tricity Auto, a leading used car dealership in Waterloo dedicated to helping customers rebuild credit and drive home in reliable vehicles.",
    url: "https://tricityautofinance.com/about",
    siteName: "Tricity Auto - Waterloo, ON Used Car Dealership",
    locale: "en_US",
    type: "website",
  },
};

const About = () => {
  return (
    <main>
      <Banner />
      <CustomerReviews />
      <Contact />
    </main>
  );
};

export default About;
