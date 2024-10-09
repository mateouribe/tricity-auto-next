import SectionTitle from "../global/sectionTitle";
import Form from "./form";

const Contact = () => {
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
      className="flex flex-col items-center justify-between gap-50 md:flex-row py-desktop px-mobile md:px-tablet lg:px-desktop"
      id="contact"
      //  ref={container}
    >
      <div className="w-full md:w-[50%] lg:w-[55%] h-full section">
        <SectionTitle
          title={"title"}
          content={"desccription"}
          containerClassName={"w-full lg:w-[90%]"}
          grayContent
        />
      </div>
      <div className="w-full md:w-[50%] lg:w-[45%] p-30 h-full bg-lightOrange rounded-20 flex flex-col gap-20 justify-center items-center section">
        <span>subtitle</span>
        <h4 className="font-medium text-26 mb-30">title</h4>

        <Form />
      </div>
    </section>
  );
};

export default Contact;
