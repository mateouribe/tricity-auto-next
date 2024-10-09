"use client";

import React, { useState } from "react";
import En from "../../flags/en";
import Sp from "../../flags/sp";

const LanguageSelector = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  //   const onClickLanguage = () => {
  //     setIsLanguageOpen(!isLanguageOpen);
  //     if (isLanguageOpen) {
  //       languageTl.current.reverse();
  //       setIsMenuOpen(false);
  //     } else {
  //       languageTl.current.play();
  //     }
  //   };

  return (
    <li className="text-black flex flex-col text-sm relative uppercase language-container z-[990] cursor-pointer hover:scale-105 transition-all">
      {currentLanguage === "en" ? <En /> : <Sp />}

      <div className="bg-white absolute left-0 top-full min-w-max py-15 rounded-10 border-[1px] border-grayMouse language-options opacity-0 scale-0 z-[-10] ">
        <ul>
          <li
            className="flex flex-row items-center gap-5 mb-10 px-15 hover:text-main"
            // onClick={() => {
            //   changeLanguage("en");
            // }}
          >
            <En />
            English
          </li>
          <li
            className="flex flex-row items-center gap-5 mb-10 px-15 hover:text-main"
            // onClick={() => {
            //   changeLanguage("sp");
            // }}
          >
            <Sp /> Español
          </li>
        </ul>
      </div>
    </li>
  );
};

export default LanguageSelector;
