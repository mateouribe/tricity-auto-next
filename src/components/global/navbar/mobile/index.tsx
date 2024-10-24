"use client";
/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React, { useLayoutEffect, useRef, useState } from "react";
import gsap, { Expo } from "gsap";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../languageSelector";
import Image from "next/image";

const Mobile = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const container = useRef(null);
  const mobileTl = useRef(gsap.timeline());

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      mobileTl.current = gsap.timeline({ paused: true });
      const tl = mobileTl.current;

      const items = document.getElementsByClassName("mobileItem");

      //Set position of items
      gsap.set(items, {
        opacity: 0,
      });
      //Set position to menu out of screen
      gsap.set(".contentMobileContainer", {
        left: "-100%",
      });

      //Set whiteLogo opacity to 0
      gsap.set(".whiteLogo", {
        opacity: 0,
      });

      //Animate burger
      tl.to(".topLine", {
        y: 4,
        rotate: 45,
        duration: 0.5,
      });

      tl.to(
        ".bottomLine",
        {
          y: -4,
          rotate: -45,
          duration: 0.5,
        },
        "-=0.5"
      );

      //Animate burger color
      tl.to(
        [".topLine", ".bottomLine"],
        {
          backgroundColor: "#fff",
        },
        "-=0.5"
      );
      tl.to(
        ".burgerCircle",
        {
          borderColor: "#fff",
        },
        "-=0.5"
      );

      //Animate black logo
      tl.fromTo(
        ".blacklogo",

        {
          opacity: 1,
          scale: 1,
        },
        {
          opacity: 0,
          scale: 0.8,
          duration: 0.5,
        },
        "-=0.5"
      );

      //Animate menu container
      tl.to(
        ".contentMobileContainer",
        {
          left: 0,
          duration: 0.5,
          ease: Expo.easeInOut,
        },
        "-=0.5"
      );

      //Animate white logo
      tl.fromTo(
        ".whiteLogo",
        {
          opacity: 0,
          scale: 0.8,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
        },
        "-=0.2"
      );

      //Animate menu items
      tl.to(
        items,
        {
          opacity: 1,
          duration: 1,
          stagger: 0.05,
          ease: Expo.easeInOut,
        },
        "-=0.5"
      );
    }, container);

    return () => ctx.revert();
  }, []);

  const onClickBurgerMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      mobileTl.current.reverse();
      mobileTl.current.duration(1);
      setIsMenuOpen(false);
    } else {
      mobileTl.current.play();
      mobileTl.current.duration(1.55);
    }
  };

  return (
    <div
      className="fixed top-0 flex lg:hidden w-full justify-between items-start p-mobile md:p-tablet z-[999999]"
      ref={container}
    >
      {/* Burger */}

      <Link href={"/"}>
        <Image
          src={"/assets/images/logo.svg"}
          alt="Tricity Auto logo, used cars in Waterloo"
          className="w-[134px] blacklogo bg-white rounded-full p-10"
          width={134}
          height={70}
          priority
        />
      </Link>
      <div
        className="w-[50px] h-[50px] border-[3px] border-black flex flex-col justify-center items-center gap-[5px] rounded-full z-[9999] burgerCircle"
        onClick={onClickBurgerMenu}
      >
        <span className="w-[30px] h-[3px] bg-black rounded-full topLine origin-center lineBurger" />
        <span className="w-[30px] h-[3px] bg-black rounded-full bottomLine origin-center lineBurger" />
      </div>

      {/* Menu */}
      <div className="w-full h-[100vh] absolute bg-black top-0 right-0 p-mobile md:p-tablet flex flex-col contentMobileContainer  pb-[100px]">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="Tricity Auto logo, used cars in Waterloo"
            className="w-[134px] whiteLogo"
            width={134}
            height={70}
            priority
          />
        </Link>
        <div className="flex items-center justify-center w-full h-full ">
          <ul className="flex flex-col items-start justify-center w-full !text-white ">
            <Link
              href="/"
              className="text-36 w-full border-b-[1px] border-black !text-white mobileItem"
              onClick={onClickBurgerMenu}
            >
              {t("home")}
            </Link>
            <Link
              href="/financing"
              className="text-36 w-full border-b-[1px] border-black !text-white mobileItem"
              onClick={onClickBurgerMenu}
            >
              {t("financing")}
            </Link>
            <Link
              href="/inventory"
              className="text-36 w-full border-b-[1px] border-black !text-white mobileItem"
              onClick={onClickBurgerMenu}
            >
              {t("inventory")}
            </Link>
            <Link
              href="/about"
              className="text-36 w-full border-b-[1px] border-black !text-white mobileItem"
              onClick={onClickBurgerMenu}
            >
              {t("about")}
            </Link>
          </ul>
        </div>
        <LanguageSelector color="#FAF8F6" />
      </div>
    </div>
  );
};

export default Mobile;
