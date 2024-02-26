import React, { createContext, useState, useContext } from 'react';
import { PackagesData } from './PackagesData';
import { HotelsData } from './HotelsData';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [selectedPackage, setSelectedPackage] = useState(null); // Store user-selected package
  const [selectedHotel, setSelectedHotel] = useState(null); // Store user-selected hotel

  const value = {
    selectedPackage,
    setSelectedPackage,
    selectedHotel,
    setSelectedHotel,
    PackagesData,
    HotelsData
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
