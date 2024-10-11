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
  title: "Used Cars Dealership in Waterloo, ON - Tricity Auto",
  description:
    "Tricity Auto is Waterloo's trusted used car dealership offering guaranteed approvals, fast financing, and credit rebuilding. Secure your next vehicle with ease today.",
  openGraph: {
    title: "Used Cars Dealership in Waterloo, ON - Tricity Auto",
    description:
      "Tricity Auto is Waterloo's trusted used car dealership offering guaranteed approvals, fast financing, and credit rebuilding. Secure your next vehicle with ease today.",
    url: "https://tricityautofinance.com/",
    siteName: "Tricity Auto - Waterloo, ON Used Car Dealership",
    locale: "en_US",
    type: "website",
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
