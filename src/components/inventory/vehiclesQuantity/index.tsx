"use client";
import { useTranslation } from "react-i18next";
import React, { useContext } from "react";
import { InventoryContext } from "@/context/InventoryContext";

const VehiclesQuantity = () => {
  const { inventory } = useContext(InventoryContext);
  const { t } = useTranslation();

  return (
    <span className="font-medium text-white text-20 lg:text-30">
      {inventory && `(${inventory.length}) ${t("inventory:subtitle")}`}
    </span>
  );
};

export default VehiclesQuantity;
