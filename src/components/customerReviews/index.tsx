// import { useTranslation } from "react-i18next";
import SectionTitle from "../global/sectionTitle";
import Review from "./review";
// import { useLayoutEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/all";

const CustomerReviews = () => {
  //   const { t } = useTranslation();
  //   const container = useRef(null);

  //   useLayoutEffect(() => {
  //     const ctx = gsap.context(() => {
  //       ScrollTrigger.create({
  //         trigger: container.current,
  //         start: "top 100%",
  //         end: "bottom 100%",
  //         animation: gsap.fromTo(
  //           ".section",
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

  return (
    <section
      className="flex flex-col items-center justify-between cursor-pointer gap-100 py-[70px] px-mobile md:px-tablet lg:px-desktop"
      //  ref={container}
    >
      <a
        href="https://www.google.com/maps/place/Tricity+Auto+-+Sales+%26+Financing/@43.4700289,-80.5145324,17z/data=!4m8!3m7!1s0x882bf3ac67ec2911:0x4254a142717eaf27!8m2!3d43.4700673!4d-80.5119782!9m1!1b1!16s%2Fg%2F11mv183klw?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex flex-col items-start justify-between gap-10 mb-20 md:items-center md:flex-row section md:mb-50">
          <SectionTitle
            title={"title"}
            containerClassName={"w-full md:w-[60%] mb-0 "}
          />
          <div className="flex flex-row items-center justify-center gap-20 px-40 py-20 bg-lightOrange rounded-20 mb-50 md:!mb-0">
            <span className="font-bold text-48">⭐️4.7</span>
            <span className="text-14">+99 reviews!</span>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-40 md:grdi-cols-2 lg:grid-cols-3 section">
          <Review
            name={"Tabitha Hutson"}
            review={
              "Just got approved for a vehicle. Awesome staff. Everyone was so friendly. I was congratulated by everyone before leaving. I recommend this company to everyone."
            }
            image={"/assets/images/review1-image.webp"}
          />
          <Review
            name={"Mark Mathews"}
            review={
              "They work to show everything you interested and Juan David Will answer all your questions. We had a phenomenal experience from start to finish. We highly recommend Tricity auto to friends and family."
            }
            image={"/assets/images/review2-image.webp"}
          />
          <Review
            name={"Andrew Lorza"}
            review={
              "Excellent dealer! We bought our first car there and the experience was great. Very honest, they delivered the Carfax and safety, they even gave us warranty, 100% recommended."
            }
            image={"/assets/images/review3-image.webp"}
          />
        </div>
      </a>
    </section>
  );
};

export default CustomerReviews;
