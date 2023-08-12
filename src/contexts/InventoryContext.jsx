import React, { createContext, useContext, useReducer, useState } from "react";
import { inventoryData } from "../data.js";
import { initialState, inventoryReducer } from "../reducers/filterReducers.js";

export const InventoryContextProvider = createContext();

const InventoryContext = ({ children }) => {
  const [inventory, dispatch] = useReducer(inventoryReducer, {
    inventory: inventoryData,
  });

  const [data, setData] = useState(
    inventoryData.sort((a, b) => a.name.localeCompare(b.name))
  );

  return (
    <InventoryContextProvider.Provider
      value={{ data, setData, inventory, dispatch }}
    >
      {children}
    </InventoryContextProvider.Provider>
  );
};

export default InventoryContext;

export const useInventory = () => useContext(InventoryContextProvider);
