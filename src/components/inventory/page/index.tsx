"use client";

import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { InventoryContext } from "@/context/InventoryContext";
import VehiclesQuantity from "../carsQuantity";
import SelectList from "@/components/custom/SelectList";
import Input from "@/components/custom/input";
import CarsCard from "../carsCard";
import Skeleton from "@/components/global/skeleton";

const Page = () => {
  const { inventory, loading, makes } = useContext(InventoryContext);
  const [filteredInventory, setFilteredInventory] = useState(inventory);
  const [selectedMake, setSelectedMake] = useState("All");
  const [searchText, setSearchText] = useState("");

  const formatPrice = (price: string) => {
    return `$${parseInt(price).toLocaleString()}`;
  };

  const handleMakeChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedMake(event.target.value);
  };

  const handleSearchChange = (event: { target: { value: string } }) => {
    setSearchText(event.target.value.toLowerCase()); // Convert search text to lowercase for case-insensitive search
  };

  useEffect(() => {
    if (makes.length > 0) {
      let filtered = inventory;

      if (filtered) {
        // Filter by make
        if (selectedMake !== "All") {
          filtered = filtered?.filter((car) => car.MAKE === selectedMake);
        }

        if (searchText) {
          filtered = filtered.filter((car) => {
            const carTitle =
              `${car.YEAR} ${car.MAKE} ${car.MODEL} | ${car.TRIM}`.toLowerCase();
            return carTitle.includes(searchText);
          });
        }

        setFilteredInventory(filtered);
      }
    }
  }, [makes, selectedMake, inventory, searchText]);

  return (
    <>
      <VehiclesQuantity />

      <div className="w-full bg-lightOrange p-30 rounded-20 mt-30">
        <div className="flex flex-col items-start gap-10 md:items-center md:flex-row">
          <label className="text-14 min-w-fit">Filter by Make:</label>
          {makes.length > 0 ? (
            <SelectList
              name="make"
              value={selectedMake}
              onChange={handleMakeChange}
              options={makes}
              noFirstOption
            />
          ) : (
            <></>
          )}
          <Input
            name="search"
            type="text"
            value={searchText}
            onChange={handleSearchChange}
            placeholder="Search by title (e.g., 2021 Toyota Camry)"
            fullWidth
            className={"max-w-[400px]"}
          />
        </div>
      </div>
      {/* CARS */}
      <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-60 mt-50">
        {!loading ? (
          filteredInventory &&
          filteredInventory.map((car, index) => (
            <CarsCard
              key={index}
              car={{
                title: `${car.YEAR} ${car.MAKE} ${car.MODEL} | ${car.TRIM}`,
                year: car.YEAR ? car.YEAR : "N/A",
                make: car.MAKE ? car.MAKE : "N/A",
                model: car.MODEL ? car.MODEL : "N/A",
                price: car.LISTPRICE
                  ? formatPrice(car.LISTPRICE)
                  : "Contact for Price",
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
            <Skeleton width="100%" height="420px" />
            <Skeleton width="100%" height="420px" />
            <Skeleton width="100%" height="420px" />
            <Skeleton width="100%" height="420px" />
            <Skeleton width="100%" height="420px" />
            <Skeleton width="100%" height="420px" />
          </>
        )}
      </div>
    </>
  );
};

export default Page;
