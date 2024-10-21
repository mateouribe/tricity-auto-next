"use client";

import Skeleton from "@/components/global/skeleton";
import CarsCard from "@/components/inventory/carsCard";
import { InventoryContext, InventoryItem } from "@/context/InventoryContext";
import React, { useContext } from "react";

type Props = {
  skeletonsQuantity: number;
  auxInventory?: InventoryItem[];
};

const VehiclesCards = ({ skeletonsQuantity, auxInventory }: Props) => {
  const { inventory } = useContext(InventoryContext);

  // Use auxInventory if it's provided and not empty, otherwise use inventory from context
  const activeInventory =
    auxInventory && auxInventory.length > 0 ? auxInventory : inventory;

  return activeInventory ? (
    activeInventory.slice(0, 3).map((car, index) => (
      <CarsCard
        key={index}
        car={{
          title: `${car.YEAR} ${car.MAKE} ${car.MODEL} | ${car.TRIM}`,
          year: car.YEAR ? car.YEAR : "N/A",
          make: car.MAKE ? car.MAKE : "N/A",
          model: car.MODEL ? car.MODEL : "N/A",
          price: car.LISTPRICE
            ? `$${parseInt(car.LISTPRICE).toLocaleString()}`
            : "N/A",
          odometer: car.ODOMETER
            ? `${parseInt(car.ODOMETER).toLocaleString("en-US")} kms`
            : "N/A",
          image: car.PHOTOS ? car.PHOTOS.split(",")[0] : "",
          VIN: car.VIN ? car.VIN : "N/A",
        }}
      />
    ))
  ) : (
    <>
      {Array.from({ length: skeletonsQuantity }).map((_, index) => (
        <Skeleton key={index} width="100%" height="420px" />
      ))}
    </>
  );
};

export default VehiclesCards;
