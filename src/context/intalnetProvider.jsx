import React, { createContext, useEffect, useState } from "react";

export const IntalnetContext = createContext();

export const IntalnetProvider = ({ children }) => {
  const [dataFormContactus, setDataFormContactus] = useState({
    service: "",
    address: "",
    name: "",
    phone: "",
    email: "",
    Message: "",
  });

  return (
    <IntalnetContext.Provider value={{ dataFormContactus }}>
      {children}
    </IntalnetContext.Provider>
  );
};
