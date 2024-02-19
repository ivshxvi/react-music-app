import React, { createContext, useContext, useState } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [formData, setFormData] = useState({ name: "", album: "", year: "", song: "" });

  const updateFormData = (data) => {
    setFormData(data);
  };

  return (
    <AppStateContext.Provider value={{ formData, updateFormData }}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  return useContext(AppStateContext);
};