/* eslint-disable @next/next/no-img-element */

import Button from "../../../custom/button";
type Props = {
  title: string;
  content: string;
  image: string;
  className?: string;
  hasButton?: boolean;
  btnText?: string;
  href?: string;
  isRight?: boolean;
  stepNumber: string;
};

const StepsCard = ({
  title,
  content,
  image,
  className = "",
  hasButton = false,
  btnText = "",
  href = "",
  isRight = false,
  stepNumber,
}: Props) => {
  //   useLayoutEffect(() => {
  //     const ctx = gsap.context(() => {
  //       ScrollTrigger.create({
  //         trigger: container.current,
  //         start: "top 100%",
  //         end: "bottom 100%",
  //         animation: gsap.fromTo(
  //           ".stepContainer",
  //           {
  //             y: 50,
  //             opacity: 0,
  //           },
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 1,
  //             ease: "power4.inOut",
  //           }
  //         ),
  //       });
  //     }, container);

  //     return () => ctx.revert();
  //   }, []);

  //   const handleHover = () => {
  //     gsap.to(`.stepCard-${stepNumber}`, {
  //       scale: 1.01,
  //       x: !isRight ? 5 : -5,
  //       y: -10,
  //       duration: 0.5,
  //     });
  //     gsap.to(`.stepNumber-${stepNumber}`, {
  //       color: "#F18637",
  //       duration: 0.5,
  //     });
  //   };

  //   const handleLeave = () => {
  //     gsap.to(`.stepCard-${stepNumber}`, {
  //       scale: 1,
  //       x: 0,
  //       y: 0,
  //       duration: 0.5,
  //     });
  //     gsap.to(`.stepNumber-${stepNumber}`, {
  //       color: "#E4E4E4",
  //       duration: 0.5,
  //     });
  //   };

  return (
    <div>
      <div
        className={`group flex flex-row justify-between items-center w-full stepContainer hover:scale-[1.01] hover:-translate-y-10  transition-all duration-100000 ease-in-out cursor-pointer ${
          isRight
            ? "flex-row-reverse md:pl-50 hover:-translate-x-5"
            : "md:pr-50 hover:translate-x-5"
        }`}
      >
        <div
          className={`overflow-hidden w-full md:w-[70%] p-40 flex flex-col justify-between rounded-20 bg-[#fff] shadow-sm relative ${className} min-h-[350px] md:min-h-[400px] gap-[70px] stepCard-${stepNumber} `}
        >
          <div className="flex flex-col gap-20 relative z-[2]">
            <h3 className="font-medium text-22 md:text-30">{title}</h3>
            <p className="text-16 text-grayMouse w-full md:w-[80%]">
              {content}
            </p>
          </div>
          {hasButton && (
            <Button
              text={btnText}
              href={href}
              className={"relative z-[2]"}
              hasHoverEffect={false}
            />
          )}
          <img
            className="absolute bottom-0 -right-20 object-cover w-[50%] z-[1]"
            src={image}
            alt={`Step ${stepNumber} in the car buying process at Tricity Auto, a trusted used cars dealership in Waterloo, ON`}
          />
        </div>
        <span
          className={`hidden md:block text-[50px] md:text-[70px] lg:text-[150px] font-extrabold text-[#E4E4E4] select-none stepNumber-${stepNumber} group-hover:text-main`}
        >
          {stepNumber}
        </span>
      </div>
    </div>
  );
};

export default StepsCard;
