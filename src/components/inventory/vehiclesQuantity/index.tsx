"use client";

import React, { useContext } from "react";
import { InventoryContext } from "@/context/InventoryContext";

const VehiclesQuantity = () => {
  const { inventory } = useContext(InventoryContext);

  return (
    <span className="font-medium text-white text-20 lg:text-30">
      {inventory && `(${inventory.length}) vehicles`}
    </span>
  );
};

export default VehiclesQuantity;
