import React, { createContext, useEffect, useState } from "react";

export const IntalnetContext = createContext();

export const IntalnetProvider = ({ children }) => {
  const [productCardApi, setProductCardApi] = useState([]);
  const [searchProductCardApi, setSearchProductCardApi] = useState([]);

  useEffect(() => {
    try {
      const getProducts = async () => {
        const url = "http://localhost:3300/api/v1/products";
        const response = await fetch(url);
        const data = await response.json();
        setProductCardApi(data);
        setSearchProductCardApi(data);
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const topProduct = productCardApi.filter((top) =>
    top.categories.includes("top")
  );

  return (
    <IntalnetContext.Provider
      value={{
        topProduct,
        setProductCardApi,
        productCardApi,
        searchProductCardApi,
      }}
    >
      {children}
    </IntalnetContext.Provider>
  );
};
