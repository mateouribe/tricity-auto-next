import Image from "next/image";
import GroupInfo from "./groupInfo";
import Navigation from "./navigation";

const Footer = () => {
  return (
    <footer
      className="relative flex flex-col items-start justify-between gap-50 py-tablet px-mobile md:px-tablet lg:px-desktop"
      style={{
        backgroundImage: `url('/assets/images/footer-image.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-full bg-[#1C1C1C]/95 h-full absolute top-0 left-0 z-[0]" />
      <div className="flex flex-row flex-wrap items-center justify-between w-full gap-20">
        <Image
          src={"/assets/images/logo.svg"}
          className="relative h-[100px]"
          alt="Tricity Auto logo, used cars in Waterloo"
          width={200}
          height={50}
          priority={false}
        />
        <div className="flex flex-row gap-20 ">
          <Image
            src={"/assets/images/ucda-logo.webp"}
            className="relative h-[50px]"
            alt="The Used Car Dealers Association of Ontario logo, representing a used cars dealership in Waterloo, ON"
            width={100}
            height={50}
            priority={false}
          />
          <Image
            src={"/assets/images/mvic-logo.svg"}
            className="relative h-[50px]"
            alt="Ontario's Vehicle Sales Regulator logo, ensuring compliance for used cars dealerships in Waterloo, ON"
            width={100}
            height={50}
            priority={false}
          />
        </div>
      </div>

      {/* Links */}
      <div className="relative z-[1] flex flex-col md:flex-row gap-20 md:gap-50">
        <GroupInfo title={"contactInfo"}>
          <li className="text-[#999999] hover:text-[#777777] transition-all mb-15 text-[18]">
            <a
              href="https://www.google.com/maps/place/Tricity+Auto+-+Sales+%26+Financing/@43.4700289,-80.5145324,17z/data=!4m6!3m5!1s0x882bf3ac67ec2911:0x4254a142717eaf27!8m2!3d43.4700673!4d-80.5119782!16s%2Fg%2F11mv183klw?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              📍 109 Bridgeport Rd E, Waterloo, ON N2J 2K3
            </a>
          </li>
          <li className="text-[#999999] hover:text-[#777777] transition-all mb-15 text-[18]">
            <a href="tel:+15195763421">📞 (519) 576-3421</a>
          </li>
          <li className="text-[#999999] hover:text-[#777777] transition-all mb-15 text-[18]">
            <a href="mailto:tricityauto1@gmail.com">
              📩 tricityauto1@gmail.com
            </a>
          </li>
        </GroupInfo>
        <Navigation />
      </div>

      {/* Copy Right */}
      <div className="flex flex-row justify-between w-full z-[1]">
        <p className="text-grayMouse">© 2024 Tricity Auto.</p>
        <p className="text-grayMouse">
          Designed by{" "}
          <a href="https://samacle.com/" target="_blank" rel="noreferrer">
            Samacle.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
