// src/app/context/InventoryContext.tsx
"use client";

import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the InventoryItem interface
export interface InventoryItem {
  DEALERSHIPID: string | null;
  VIN: string | null;
  STOCKNUMBER: string | null;
  YEAR: string | null;
  MAKE: string | null;
  MODEL: string | null;
  TRIM: string | null;
  INVENTORYTYPE: string | null;
  DRIVETYPE: string | null;
  TRANSMISSIONTYPE: string | null;
  ODOMETER: string | null;
  EXTCOLOUR: string | null;
  INTCOLOUR: string | null;
  LISTPRICE: string | null;
  DESCRIPTION: string | null;
  OPTIONS: string | null;
  PHOTOS: string | null;
}

// Define the context with proper types
export const InventoryContext = createContext<{
  inventory: InventoryItem[] | null;
  loading: boolean;
  showMessage: boolean;
  setShowMessage: Dispatch<SetStateAction<boolean>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  makes: string[];
}>({
  inventory: null,
  loading: true,
  showMessage: false,
  setShowMessage: () => {},
  message: "",
  setMessage: () => {},
  makes: [],
});

interface InventoryProviderProps {
  children: ReactNode;
}

export const InventoryProvider = ({ children }: InventoryProviderProps) => {
  const [inventory, setInventory] = useState<InventoryItem[] | null>(null);
  const [loading, setLoading] = useState(true); // Initially loading
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [makes, setMakes] = useState<string[]>([]);

  // Client-side fetch for inventory data
  const fetchInventory = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/inventory");
      const data: InventoryItem[] = await response.json(); // Fetch from your external API
      setInventory(data); // Set the fetched data into state
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchInventory(); // Fetch inventory on mount
  }, []);

  useEffect(() => {
    if (inventory && inventory.length > 0) {
      setMakes(["All", ...new Set(inventory.map((car) => car.MAKE))]); // Set makes based on inventory data
    }
  }, [inventory]);

  return (
    <InventoryContext.Provider
      value={{
        inventory,
        loading,
        showMessage,
        setShowMessage,
        message,
        setMessage,
        makes,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};
