import { Metadata } from "next";
import SectionTitle from "@/components/global/sectionTitle";
import Form from "@/components/financing/form";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/global/translationsProvider";

export const metadata: Metadata = {
  title: "Credit Application in Waterloo | Tricity Auto",
  description:
    "Explore flexible car financing solutions at Tricity Auto. Get approved today with affordable rates, easy terms, and personalized plans for all credit types",
  authors: [
    { name: "Tricity Auto Finance", url: "https://www.tricityautofinance.com" },
  ],
  openGraph: {
    title: "Credit Application in Waterloo | Tricity Auto",
    description:
      "Explore flexible car financing solutions at Tricity Auto. Get approved today with affordable rates, easy terms, and personalized plans for all credit types",
    url: "https://www.tricityautofinance.com/financing",
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
    title: "Credit Application in Waterloo | Tricity Auto",
    description:
      "Explore flexible car financing solutions at Tricity Auto. Get approved today with affordable rates, easy terms, and personalized plans for all credit types",
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

const namespaces = ["financing", "buttons"];

const Financing = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t, resources } = await initTranslations(locale, namespaces);

  return (
    <>
      <TranslationsProvider
        locale={locale}
        resources={resources}
        namespaces={namespaces}
      >
        <section className="py-desktop px-mobile md:px-tablet lg:px-desktop">
          {/* HEADER */}
          <div className="flex flex-col items-center justify-between lg:flex-row mb-50 gap-50">
            <SectionTitle
              title={t("title")}
              containerClassName={"!mb-0 title"}
              isH1
            />
            <p className="mt-10 text-grayMouse lg:mt-0 title">
              {t("description")}
            </p>
          </div>

          <Form />
        </section>
      </TranslationsProvider>
    </>
  );
};

export default Financing;
