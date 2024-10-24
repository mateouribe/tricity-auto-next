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
        <SectionTitle title={t("contact:title")} grayContent />
        <ul className="flex flex-col gap-20 items-start w-full md:w-[60%]">
          <li>
            <h4 className="text-20 text-grayMouse mb-5 font-medium">
              {t("contact:address")}
            </h4>
            <a
              href="https://www.google.com/maps/place/Tricity+Auto+-+Sales+%26+Financing/@43.4700289,-80.5145324,17z/data=!4m6!3m5!1s0x882bf3ac67ec2911:0x4254a142717eaf27!8m2!3d43.4700673!4d-80.5119782!16s%2Fg%2F11mv183klw?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 109 Bridgeport Rd E, Waterloo, ON N2J 2K3
            </a>
          </li>
          <li>
            <h4 className="text-20 text-grayMouse mb-5 font-medium">
              {t("contact:phone")}
            </h4>
            <a href="tel:+15195763421">📞 (519) 576-3421</a>
          </li>
          <li className="w-full">
            <h4 className="text-20 text-grayMouse mb-5 font-medium">
              {t("contact:opening")}
            </h4>
            <ul className="w-full">
              <li className="flex flex-row justify-between mb-[10px]">
                <span>{t("contact:monday")}</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex flex-row justify-between mb-[10px]">
                <span>{t("contact:tuesday")}</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex flex-row justify-between mb-[10px]">
                <span>{t("contact:wednesday")}</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex flex-row justify-between mb-[10px]">
                <span>{t("contact:thursday")}</span>
                <span>10:00 AM - 8:00 PM</span>
              </li>
              <li className="flex flex-row justify-between mb-[10px]">
                <span>{t("contact:friday")}</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex flex-row justify-between mb-[10px]">
                <span>{t("contact:saturday")}</span>
                <span>10:00 AM - 5:00 PM</span>
              </li>
              <li className="flex flex-row justify-between mb-[10px]">
                <span>{t("contact:sunday")}</span>
                <span>{t("contact:closed")}</span>
              </li>
            </ul>
          </li>
        </ul>
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
