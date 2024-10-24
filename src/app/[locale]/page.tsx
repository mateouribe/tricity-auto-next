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
  title: "Used Cars Dealership in Waterloo, ON | Tricity Auto",
  description:
    "Find quality used cars in Waterloo at Tricity Auto. Explore affordable options with easy financing tailored to your budget and all credit types",
  authors: [
    { name: "Tricity Auto Finance", url: "https://www.tricityautofinance.com" },
  ],
  openGraph: {
    title: "Used Cars Dealership in Waterloo, ON | Tricity Auto",
    description:
      "Find quality used cars in Waterloo at Tricity Auto. Explore affordable options with easy financing tailored to your budget and all credit types",
    url: "https://www.tricityautofinance.com",
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
    title: "Used Cars Dealership in Waterloo, ON | Tricity Auto",
    description:
      "Find quality used cars in Waterloo at Tricity Auto. Explore affordable options with easy financing tailored to your budget and all credit types",
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
