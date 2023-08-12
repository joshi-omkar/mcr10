import React, { createContext, useContext, useState } from "react";
import { inventoryData } from "../data.js";

export const InventoryContextProvider = createContext();

const InventoryContext = ({ children }) => {

  const [data, setData] = useState(inventoryData)

  return (
    <InventoryContextProvider.Provider value={{data, setData}}>{children}</InventoryContextProvider.Provider>
  );
};

export default InventoryContext;

export const useInventory = () => useContext(InventoryContextProvider);
