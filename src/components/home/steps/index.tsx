import { TranslationProps } from "@/types/i18nTypes";
import SectionTitle from "@/components/global/sectionTitle";
import StepsCard from "./stepsCard";

const Steps = ({ t }: TranslationProps) => {
  //   const { t } = useTranslation();

  return (
    <section className="pt-100 p-mobile md:px-tablet lg:p-desktop ">
      <SectionTitle title={t("steps.title")} />
      <div className="flex flex-col w-full gap-30 md:gap-50">
        <StepsCard
          title={t("steps.stepOneTitle")}
          content={t("steps.stepOneDescription")}
          btnText={t("buttons:applyNow")}
          href="/financing"
          stepNumber={"01"}
          image={"/assets/images/step1-image.webp"}
          hasButton
        />
        <StepsCard
          title={t("steps.stepTwoTitle")}
          content={t("steps.stepTwoDescription")}
          stepNumber={"02"}
          image={"/assets/images/step2-image.webp"}
          isRight
        />
        <StepsCard
          title={t("steps.stepThreeTitle")}
          content={t("steps.stepThreeDescription")}
          btnText={t("buttons:viewInventory")}
          stepNumber={"03"}
          href="/inventory"
          image={"/assets/images/step1-image.webp"}
          hasButton
        />
      </div>
    </section>
  );
};

export default Steps;
