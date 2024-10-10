import { TranslationProps } from "@/types/i18nTypes";
import SectionTitle from "../global/sectionTitle";
import Form from "./form";

const Contact = ({ t }: TranslationProps) => {
  return (
    <section
      className="flex flex-col items-center justify-between gap-50 md:flex-row py-desktop px-mobile md:px-tablet lg:px-desktop"
      id="contact"
    >
      <div className="w-full md:w-[50%] lg:w-[55%] h-full section">
        <SectionTitle
          title={t("contact:title")}
          content={t("contact:description")}
          containerClassName={"w-full lg:w-[90%]"}
          grayContent
        />
      </div>
      <div className="w-full md:w-[50%] lg:w-[45%] p-30 h-full bg-lightOrange rounded-20 flex flex-col gap-20 justify-center items-center section">
        <span>{t("contact:formSubtitle")}</span>
        <h4 className="font-medium text-26 mb-30">{t("contact:formTitle")}</h4>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
