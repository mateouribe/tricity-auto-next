// import { useTranslation } from "react-i18next";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import Button from "../../custom/button";

import Button from "../../custom/button";

const Banner = () => {
  //   const { t } = useTranslation();
  //   const container = useRef(null);

  //   useEffect(() => {
  //     const ctx = gsap.context(() => {
  //       const tl = gsap.timeline();
  //       const duration = 0.8;
  //       const ease = "power4.inOut";
  //       const delay = "-=0.7";

  //       gsap.set(".title", {
  //         y: 50,
  //         opacity: 0,
  //       });
  //       gsap.set(".subtitle", {
  //         y: 50,
  //         opacity: 0,
  //       });
  //       gsap.set(".button", {
  //         y: 50,
  //         opacity: 0,
  //       });
  //       gsap.set(container.current, {
  //         y: 50,
  //         opacity: 0,
  //       });

  //       tl.to(container.current, {
  //         y: 0,
  //         opacity: 1,
  //         duration: duration,
  //         ease: ease,
  //       });

  //       tl.to(
  //         ".title",
  //         {
  //           y: 0,
  //           opacity: 1,
  //           duration: duration,
  //           ease: ease,
  //         },
  //         delay
  //       );
  //       tl.to(
  //         ".subtitle",
  //         {
  //           y: 0,
  //           opacity: 1,
  //           duration: duration,
  //           ease: ease,
  //         },
  //         delay
  //       );
  //       tl.to(
  //         ".button",
  //         {
  //           y: 0,
  //           opacity: 1,
  //           duration: duration,
  //           ease: ease,
  //         },
  //         delay
  //       );
  //     }, container);

  //     return () => ctx.revert();
  //   }, []);

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
            Hola
          </h1>
          <p className="w-full text-center text-white text-16 my-50 lg:w-1/2 md:text-left subtitle">
            {/* {t("home.mission")} */}Hola2
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center w-full gap-20 md:justify-start">
          <Button text={"Apply Now"} href="/financing" className={"button"} />
          <Button
            text={"View Inventory"}
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
