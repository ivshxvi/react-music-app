import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [formData, setFormData] = useState({ album: "", year: "", song: "" });
  const [entries, setEntries] = useState([]);

  const updateFormData = (data) => {
    setFormData(data);
  };

  const addEntry = () => {
    setEntries((prevEntries) => [...prevEntries, formData]);
  };

  return (
    <AppStateContext.Provider value={{ formData, updateFormData, entries, addEntry }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};