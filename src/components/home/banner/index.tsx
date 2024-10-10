import Button from "../../custom/button";
import { TranslationProps } from "@/types/i18nTypes";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Banner = ({ t }: TranslationProps) => {
  return (
    <section className="py-tablet px-mobile md:px-tablet ">
      <div
        className="w-full rounded-bl-[50px] rounded-tr-[50px] rounded-br-[10px] rounded-tl-[10px] min-h-[60vh] px-20 lg:px-50 py-[60px]"
        style={{
          backgroundImage: `url('/assets/images/home-banner.webp')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        //    ref={container}
      >
        <div className="flex flex-col w-full gap-60">
          <h1 className="text-center md:text-left text-36 md:text-48 lg:text-[70px] leading-none font-medium text-white title">
            {t("welcomeMessage")}
          </h1>
          <p className="w-full text-center text-white text-16 my-50 lg:w-1/2 md:text-left subtitle">
            {t("mission")}
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-20 md:justify-start">
          <Button
            text={t("buttons:applyNow")}
            href="/financing"
            className={"button"}
          />
          <Button
            text={t("buttons:viewInventory")}
            href="/inventory"
            className={"button"}
            bordered
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
