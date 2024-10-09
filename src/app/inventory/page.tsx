import { Metadata } from "next";
import SectionTitle from "@/components/global/sectionTitle";
import Page from "@/components/inventory/page";

export const metadata: Metadata = {
  title: "Used Cars Dealership in Waterloo - Tricity Auto",
  description:
    "Explore Tricity Auto's wide range of used cars, from SUVs to sedans. Get easy financing, fast approvals, and find your perfect vehicle in Waterloo today.",
  openGraph: {
    title: "Used Cars Dealership in Waterloo - Tricity Auto",
    description:
      "Explore Tricity Auto's wide range of used cars, from SUVs to sedans. Get easy financing, fast approvals, and find your perfect vehicle in Waterloo today.",
    url: "https://tricityautofinance.com/inventory",
    siteName: "Tricity Auto - Waterloo, ON Used Car Dealership",
    locale: "en_US",
    type: "website",
  },
};

const Inventory = () => {
  return (
    <section className="py-desktop px-mobile md:px-tablet lg:px-desktop">
      <SectionTitle title={"title"} containerClassName={"mb-10"} isH1 />
      <Page />
    </section>
  );
};

export default Inventory;
