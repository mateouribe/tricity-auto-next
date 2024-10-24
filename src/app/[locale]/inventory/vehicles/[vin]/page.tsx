import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/global/translationsProvider";
import Page from "@/components/inventory/vehicle/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Our Used Cars in Waterloo, ON | Tricity Auto",
  description:
    "Find quality used cars in Waterloo at Tricity Auto. Explore affordable options with easy financing tailored to your budget and all credit types",
  authors: [
    { name: "Tricity Auto Finance", url: "https://www.tricityautofinance.com" },
  ],
  openGraph: {
    title: "Explore Our Used Cars in Waterloo, ON | Tricity Auto",
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
    title: "Explore Our Used Cars in Waterloo, ON | Tricity Auto",
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

const namespaces = ["carDetails", "buttons"];

const VehiclePage = async ({
  params: { vin, locale },
}: {
  params: { vin: string; locale: string };
}) => {
  const { resources } = await initTranslations(locale, namespaces);

  return (
    <TranslationsProvider
      locale={locale}
      resources={resources}
      namespaces={namespaces}
    >
      <Page vin={vin} />
    </TranslationsProvider>
  );
};

export default VehiclePage;
