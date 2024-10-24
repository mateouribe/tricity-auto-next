import { Metadata } from "next";
import SectionTitle from "@/components/global/sectionTitle";
import Page from "@/components/inventory/page";
import initTranslations from "@/app/i18n";

export const metadata: Metadata = {
  title: "Used Cars for Sale in Waterloo | Tricity Auto",
  description:
    "Browse the best selection of used cars in Waterloo at Tricity Auto. Find reliable cars with flexible financing options to suit every budget and credit",
  authors: [
    { name: "Tricity Auto Finance", url: "https://www.tricityautofinance.com" },
  ],
  openGraph: {
    title: "Used Cars for Sale in Waterloo | Tricity Auto",
    description:
      "Browse the best selection of used cars in Waterloo at Tricity Auto. Find reliable cars with flexible financing options to suit every budget and credit",
    url: "https://www.tricityautofinance.com/inventory",
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
    title: "Used Cars for Sale in Waterloo | Tricity Auto",
    description:
      "Browse the best selection of used cars in Waterloo at Tricity Auto. Find reliable cars with flexible financing options to suit every budget and credit",
    creator: "@tricityauto",
    images: [
      "https://www.tricityautofinance.com/assets/images/tricity-auto-social-media-img.png",
    ],
  },
  robots: {
    index: true, // Allow the page to be indexed.
    follow: true, // Follow links on the page.
  },
  metadataBase: new URL("https://www.tricityauto.com"),
  alternates: {
    canonical: "./",
  },
};

const Inventory = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, ["inventory"]);

  return (
    <>
      <section className="py-desktop px-mobile md:px-tablet lg:px-desktop">
        <SectionTitle title={t("title")} containerClassName={"mb-10"} isH1 />
        <Page />
      </section>
    </>
  );
};

export default Inventory;
