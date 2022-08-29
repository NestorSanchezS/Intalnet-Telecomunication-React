import React, { createContext, useState } from "react";

export const IntalnetContext = createContext();
export const IntalnetProvider = ({ children }) => {
  const [dataFormContactus, setDataFormContactus] = useState({});
  return (
    <intalnetContext.Provider value={{ dataFormContactus }}>
      {children}
    </intalnetContext.Provider>
  );
};
