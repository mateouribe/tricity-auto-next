import { Metadata } from "next";
import Steps from "@/components/home/steps";
import Banner from "@/components/home/banner";
import VehiclesSearch from "@/components/home/vehiclesSearch";
import WhyUs from "@/components/home/whyUs";
import CustomerReviews from "@/components/customerReviews";
import Contact from "@/components/contact";
import initTranslations from "../i18n";
import TranslationsProvider from "@/components/global/translationsProvider";

export const metadata: Metadata = {
  title: "Used Car Dealership in Waterloo, Ontario - Tricity Auto",
  description:
    "Explore Tricity Auto, the top used car dealership in Waterloo, ON. We offer competitive financing solutions for all credit types and a wide selection of pre-owned cars, SUVs, and trucks. Drive away today with confidence!",
  openGraph: {
    type: "website",
    url: "https://www.tricityauto.com",
    title: "Tricity Auto - Used Car Dealership in Waterloo, Ontario",
    description:
      "Looking for used cars in Waterloo, ON? Tricity Auto offers financing solutions for every budget. Apply today and explore our inventory of quality pre-owned cars.",
    images: [
      {
        url: "https://www.tricityauto.com/assets/images/home-banner.webp",
        width: 1200,
        height: 630,
        alt: "Tricity Auto used car dealership in Waterloo, Ontario - Competitive Financing Available",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tricity Auto - Used Car Dealership in Waterloo, Ontario",
    description:
      "Find affordable used cars and competitive financing at Tricity Auto. Serving Waterloo, Ontario, and beyond. Apply today!",
    images: ["https://www.tricityauto.com/assets/images/home-banner.webp"],
  },
  metadataBase: new URL("https://www.tricityauto.com"),
  alternates: {
    canonical: "https://www.tricityauto.com",
  },
};

const namespaces = [
  "home",
  "buttons",
  "inventory",
  "review",
  "contact",
  "whyUs",
  "carDetails",
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t, resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={namespaces}
    >
      <main>
        <Banner t={t} />
        <VehiclesSearch t={t} />
        <Steps t={t} />
        <WhyUs t={t} />
        <CustomerReviews t={t} />
        <Contact t={t} />
      </main>
    </TranslationsProvider>
  );
}
