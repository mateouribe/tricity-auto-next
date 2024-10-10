"use client";

import React from "react";
import { useTranslation } from "react-i18next";

type Props = {
  title: string;
  children: React.ReactNode;
};

const GroupInfo = ({ title, children }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-10">
      <div className="relative">
        <p className="font-medium text-white text-20">{t(`footer:${title}`)}</p>
        <span className="w-50 h-[1px] bg-main absolute left-0 -bottom-[2px]"></span>
      </div>
      <ul>{children}</ul>
    </div>
  );
};

export default GroupInfo;
