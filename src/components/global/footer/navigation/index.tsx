"use client";

import Link from "next/link";
import React from "react";
import GroupInfo from "../groupInfo";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const { t } = useTranslation();

  return (
    <GroupInfo title={"usefulLinks"}>
      <li className="text-[#999999] mb-15 text-[18]">
        <Link href={"/"} className=" hover:text-[#777777] transition-all ">
          {t("home")}
        </Link>
      </li>
      <li className="text-[#999999]  mb-15 text-[18]">
        <Link
          href={"/financing"}
          className=" hover:text-[#777777] transition-all "
        >
          {t("financing")}
        </Link>
      </li>
      <li className="text-[#999999]  mb-15 text-[18]">
        <Link
          href={"/inventory"}
          className=" hover:text-[#777777] transition-all "
        >
          {t("inventory")}
        </Link>
      </li>
      <li className="text-[#999999]  mb-15 text-[18]">
        <Link href={"/about"} className=" hover:text-[#777777] transition-all ">
          {t("about")}
        </Link>
      </li>
    </GroupInfo>
  );
};

export default Navigation;
