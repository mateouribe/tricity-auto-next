import { Metadata } from "next";
import SectionTitle from "@/components/global/sectionTitle";
import Form from "@/components/financing/form";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/global/translationsProvider";
import Google from "@/components/global/google";

export const metadata: Metadata = {
  title: "Auto Financing in Waterloo, ON - Tricity Auto",
  description:
    "Tricity Auto provides flexible car loans in Waterloo, ON with guaranteed approvals and a 0% turn-down policy. Get fast approval and the best rates tailored to your budget.",
  openGraph: {
    title: "Auto Financing in Waterloo, ON - Tricity Auto",
    description:
      "Tricity Auto provides flexible car loans in Waterloo, ON with guaranteed approvals and a 0% turn-down policy. Get fast approval and the best rates tailored to your budget.",
    url: "https://www.tricityautofinance.com/financing",
    siteName: "Tricity Auto - Waterloo, ON Used Car Dealership",
    locale: "en_US",
    type: "website",
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
      <Google />
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
