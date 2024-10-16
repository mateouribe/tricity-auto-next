import { Metadata } from "next";
import SectionTitle from "@/components/global/sectionTitle";
import Page from "@/components/inventory/page";
import initTranslations from "@/app/i18n";

export const metadata: Metadata = {
  title: "Used Cars Inventory in Waterloo, ON - Tricity Auto",
  description:
    "Explore Tricity Auto's wide range of used cars, from SUVs to sedans. Get easy financing, fast approvals, and find your perfect vehicle in Waterloo, ON today.",
  openGraph: {
    title: "Used Cars Inventory in Waterloo, ON - Tricity Auto",
    description:
      "Explore Tricity Auto's wide range of used cars, from SUVs to sedans. Get easy financing, fast approvals, and find your perfect vehicle in Waterloo, ON today.",
    url: "https://tricityautofinance.com/inventory",
    siteName: "Tricity Auto - Waterloo, ON Used Car Dealership",
    locale: "en_US",
    type: "website",
  },
};

const Inventory = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, ["inventory"]);

  return (
    <section className="py-desktop px-mobile md:px-tablet lg:px-desktop">
      <SectionTitle title={t("title")} containerClassName={"mb-10"} isH1 />
      <Page />
    </section>
  );
};

export default Inventory;
