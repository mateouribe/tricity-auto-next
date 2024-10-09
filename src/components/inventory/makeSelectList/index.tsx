"use client";

import { InventoryContext } from "@/context/InventoryContext";
import React, { useContext, useState } from "react";
import SelectList from "../../custom/SelectList";

const MakeSelectList = () => {
  const { makes } = useContext(InventoryContext);
  const [selectedMake] = useState("All");

  return makes.length > 0 ? (
    <SelectList
      value={selectedMake}
      onChange={() => {}}
      options={makes}
      noFirstOption
      name={"filter-male"}
    />
  ) : (
    <></>
  );
};

export default MakeSelectList;
