import { Metadata } from "next";
import Steps from "@/components/home/steps";
import Banner from "@/components/home/banner";
import VehiclesSearch from "@/components/home/vehiclesSearch";
import WhyUs from "@/components/home/whyUs";
import CustomerReviews from "@/components/customerReviews";
import Contact from "@/components/contact";

export const metadata: Metadata = {
  title: "Used Cars Dealership in Waterloo - Tricity Auto",
  description:
    "Tricity Auto is Waterloo's trusted used car dealership offering guaranteed approvals, fast financing, and credit rebuilding. Secure your next vehicle with ease today.",
  openGraph: {
    title: "Used Cars Dealership in Waterloo - Tricity Auto",
    description:
      "Tricity Auto is Waterloo's trusted used car dealership offering guaranteed approvals, fast financing, and credit rebuilding. Secure your next vehicle with ease today.",
    url: "https://tricityautofinance.com/",
    siteName: "Tricity Auto - Waterloo, ON Used Car Dealership",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <Banner />
      <VehiclesSearch />
      <Steps />
      <WhyUs />
      <CustomerReviews />
      <Contact />
    </main>
  );
}
