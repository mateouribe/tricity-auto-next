import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/global/translationsProvider";
import Page from "@/components/inventory/vehicle/page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Used car for sale in Waterloo, ON - Tricity Auto",
  description:
    "Check out this well-maintained used car for sale in Waterloo, ON. Great mileage, affordable price, and financing options.",
  openGraph: {
    title: "Used car for sale in Waterloo, ON - Tricity Auto",
    description:
      "Check out this well-maintained used car for sale in Waterloo, ON. Great mileage, affordable price, and financing options.",
    siteName: "Tricity Auto - Waterloo, ON Used Car Dealership",
    locale: "en_US",
    type: "website",
  },
};

const namespaces = ["carDetails", "buttons"];

const VehiclePage = async ({
  params: { vin, locale },
}: {
  params: { vin: string; locale: string };
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);

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
