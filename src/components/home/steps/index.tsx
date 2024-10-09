import SectionTitle from "@/components/global/sectionTitle";
import StepsCard from "./stepsCard";

const Steps = () => {
  //   const { t } = useTranslation();

  return (
    <section className="pt-100 p-mobile md:px-tablet lg:p-desktop ">
      <SectionTitle title={"Title"} />
      <div className="flex flex-col w-full gap-30 md:gap-50">
        <StepsCard
          title="Title"
          content="Content"
          btnText="Button"
          href="/financing"
          stepNumber={"01"}
          image={"/assets/images/step1-image.webp"}
          hasButton
        />
        <StepsCard
          title="Title"
          content="Content"
          stepNumber={"02"}
          image={"/assets/images/step2-image.webp"}
          isRight
        />
        <StepsCard
          title="Title"
          content="Content"
          btnText="Button"
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
