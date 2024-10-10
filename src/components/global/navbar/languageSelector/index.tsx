"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { usePathname, useRouter } from "next/navigation";
import i18nConfig from "../../../../../i18nConfig";

const LanguageSelector = ({ color }: { color: string }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();
  const [selectedLanguage, setSelectedLanguage] =
    useState<string>(currentLocale);

  useEffect(() => {
    // Get the stored language from localStorage on component mount
    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage && storedLanguage !== currentLocale) {
      i18n.changeLanguage(storedLanguage); // Sync i18n with stored language
    } else {
      setSelectedLanguage(currentLocale); // Set the state to current i18n language
    }
  }, [currentLocale, i18n]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    // Set the language in i18n and update the state
    i18n.changeLanguage(newLocale);
    setSelectedLanguage(newLocale);

    // Save the selected language to localStorage
    localStorage.setItem("language", newLocale);

    // Redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <li
      className="flex flex-row items-center gap-5 text-sm relative uppercase language-container z-[990] cursor-pointer hover:scale-105 transition-all"
      style={{
        color: color,
      }}
    >
      <select
        onChange={handleChange}
        value={selectedLanguage} // Use the selectedLanguage state for the value
        className="bg-transparent"
        style={{
          color: color,
        }}
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </li>
  );
};

export default LanguageSelector;
