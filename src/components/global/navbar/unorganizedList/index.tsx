"use client";

import Link from "next/link";
import React from "react";
import LanguageSelector from "../languageSelector";
import Button from "@/components/custom/button";
import { useTranslation } from "react-i18next";

const UnorganizedList = () => {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-row items-center gap-30">
      <Link href="/">{t("home")}</Link>
      <Link href="/financing">{t("financing")}</Link>
      <Link href="/inventory">{t("inventory")}</Link>
      <Link href="/about">{t("about")}</Link>
      <LanguageSelector color="1C1C1C" />
      <li>
        <Button text={t("buttons:requestCarLoan")} href={"/financing"} />
      </li>
    </ul>
  );
};

export default UnorganizedList;
