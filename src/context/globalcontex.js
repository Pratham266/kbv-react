import React, { createContext, useState, useContext } from "react";

// Create the context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <GlobalStateContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

// Create a custom hook to use the GlobalStateContext
export const useGlobalState = () => {
  return useContext(GlobalStateContext);
};
