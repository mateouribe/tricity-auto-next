import Link from "next/link";
import Image from "next/image";
import Button from "../../custom/button";
import LanguageSelector from "./languageSelector";

const Navbar = () => {
  //   const { t } = useTranslation();
  //   const sectionRef = useRef(null);
  //   const mobileTl = useRef(null);
  //   const languageTl = useRef(null);
  //   const container = useRef(null);
  //   const [isMenuOpen, setIsMenuOpen] = useState(false);
  //   const [currentLanguage, setCurrentLanguage] = useState("en");
  //   const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  //   const { i18n } = useTranslation();

  //   useLayoutEffect(() => {
  //     const ctx = gsap.context(() => {
  //       mobileTl.current = gsap.timeline({ paused: true });
  //       const tl = mobileTl.current;

  //       const items = document.getElementsByClassName("mobileItem");

  //       //Set position of items
  //       gsap.set(items, {
  //         opacity: 0,
  //       });
  //       //Set position to menu out of screen
  //       gsap.set(".contentMobileContainer", {
  //         left: "-100%",
  //       });

  //       //Set whiteLogo opacity to 0
  //       gsap.set(".whiteLogo", {
  //         opacity: 0,
  //       });

  //       //Animate burger
  //       tl.to(".topLine", {
  //         y: 4,
  //         rotate: 45,
  //         duration: 0.5,
  //       });

  //       tl.to(
  //         ".bottomLine",
  //         {
  //           y: -4,
  //           rotate: -45,
  //           duration: 0.5,
  //         },
  //         "-=0.5"
  //       );

  //       //Animate burger color
  //       tl.to(
  //         [".topLine", ".bottomLine"],
  //         {
  //           backgroundColor: "#fff",
  //         },
  //         "-=0.5"
  //       );
  //       tl.to(
  //         ".burgerCircle",
  //         {
  //           borderColor: "#fff",
  //         },
  //         "-=0.5"
  //       );

  //       //Animate black logo
  //       tl.fromTo(
  //         ".blacklogo",

  //         {
  //           opacity: 1,
  //           scale: 1,
  //         },
  //         {
  //           opacity: 0,
  //           scale: 0.8,
  //           duration: 0.5,
  //         },
  //         "-=0.5"
  //       );

  //       //Animate menu container
  //       tl.to(
  //         ".contentMobileContainer",
  //         {
  //           left: 0,
  //           duration: 0.5,
  //           ease: Expo.easeInOut,
  //         },
  //         "-=0.5"
  //       );

  //       //Animate white logo
  //       tl.fromTo(
  //         ".whiteLogo",
  //         {
  //           opacity: 0,
  //           scale: 0.8,
  //         },
  //         {
  //           opacity: 1,
  //           scale: 1,
  //           duration: 0.5,
  //         },
  //         "-=0.2"
  //       );

  //       //Animate menu items
  //       tl.to(
  //         items,
  //         {
  //           opacity: 1,
  //           duration: 1,
  //           stagger: 0.05,
  //           ease: Expo.easeInOut,
  //         },
  //         "-=0.5"
  //       );

  //       //Language container animation
  //       languageTl.current = gsap.timeline({ paused: true });

  //       languageTl.current.to(".language-options", {
  //         scale: 1,
  //         opacity: 1,
  //         duration: 0.3,
  //         ease: Expo.easeInOut,
  //       });
  //     }, container);

  //     return () => ctx.revert();
  //   }, []);

  //   const onClickBurgerMenu = () => {
  //     setIsMenuOpen(!isMenuOpen);
  //     if (isMenuOpen) {
  //       mobileTl.current.reverse();
  //       mobileTl.current.duration(1);
  //       setIsMenuOpen(false);
  //     } else {
  //       mobileTl.current.play();
  //       mobileTl.current.duration(1.55);
  //     }
  //   };

  //   const onClickLanguage = () => {
  //     setIsLanguageOpen(!isLanguageOpen);
  //     if (isLanguageOpen) {
  //       languageTl.current.reverse();
  //       setIsMenuOpen(false);
  //     } else {
  //       languageTl.current.play();
  //     }
  //   };

  //   const changeLanguage = (lng) => {
  //     i18n.changeLanguage(lng);
  //     setCurrentLanguage(lng);
  //   };

  return (
    <header>
      <div
        className={`hidden lg:block sticky top-0 left-0 z-[999] pt-20 pb-10 bg-white`}
      >
        <nav className="flex flex-row items-center px-20 lg:px-[60px] justify-between">
          <Link href={"/"}>
            <Image
              className="w-auto bg-contain cursor-pointer h-100"
              //     src={logo}
              alt="Tricity Auto logo, a used cars dealership in Waterloo, ON"
              loading="lazy"
              src={"/assets/images/logo.svg"}
              width={134}
              height={134}
            />
          </Link>

          <ul className="flex flex-row items-center gap-30">
            <Link href="/">Home</Link>
            <Link href="/financing">Financing</Link>
            <Link href="/inventory">Inventory</Link>
            <Link href="/about">About</Link>
            <LanguageSelector />
            <li>
              <Button text={"Request Car Loan"} href={"/financing"} />
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      <div className="fixed top-0 flex lg:hidden w-full justify-between items-start p-mobile md:p-tablet z-[999999]">
        {/* Burger */}

        {/* <img
          src={logo}
          alt="Tricity Auto logo, a used cars dealership in Waterloo, ON"
          className="w-[134px] blacklogo bg-white rounded-full p-10"
          loading="lazy"
        />
        <div
          className="w-[50px] h-[50px] border-[3px] border-black flex flex-col justify-center items-center gap-[5px] rounded-full z-[9999] burgerCircle"
          onClick={onClickBurgerMenu}
        >
          <span className="w-[30px] h-[3px] bg-black rounded-full topLine origin-center lineBurger" />
          <span className="w-[30px] h-[3px] bg-black rounded-full bottomLine origin-center lineBurger" />
        </div> */}

        {/* Menu */}
        {/* <div className="w-full h-[100vh] absolute bg-black top-0 right-0 p-mobile md:p-tablet flex flex-col contentMobileContainer">
          <LinkDom to={"/"}>
            <img
              src={logo}
              alt="Tricity Auto logo, a used cars dealership in Waterloo, ON"
              className="w-[134px] whiteLogo"
              loading="lazy"
            />
          </LinkDom>
          <div className="flex items-center justify-center w-full h-full ">
            <ul className="flex flex-col items-start justify-center w-full !text-white ">
              <Link
                route="/"
                className="text-36 w-full border-b-[1px] border-black !text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                {t("nav.home")}
              </Link>
              <Link
                route="/financing"
                className="text-36 w-full border-b-[1px] border-black !text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                {t("nav.financing")}
              </Link>
              <Link
                route="/inventory"
                className="text-36 w-full border-b-[1px] border-black !text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                {t("nav.inventory")}
              </Link>
              <Link
                route="/about"
                className="text-36 w-full border-b-[1px] border-black !text-white mobileItem"
                onClick={onClickBurgerMenu}
              >
                {t("nav.about")}
              </Link>
            </ul>
          </div>
          <ul className="flex gap-20 text-white pb-desktop">
            <li
              className={`mobileItem ${
                currentLanguage !== "en" ? "text-white opacity-70" : "text-main"
              }`}
              onClick={() => {
                changeLanguage("en");
                onClickBurgerMenu();
              }}
            >
              EN
            </li>
            <li
              className={`mobileItem ${
                currentLanguage === "sp" ? "text-main" : "text-white opacity-70"
              }`}
              onClick={() => {
                changeLanguage("sp");
                onClickBurgerMenu();
              }}
            >
              ES
            </li>
          </ul>
        </div> */}
      </div>
    </header>
  );
};

export default Navbar;
