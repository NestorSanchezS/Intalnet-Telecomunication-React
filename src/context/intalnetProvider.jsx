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

  const [getQuestions, setGetQuestions] = useState([]);

  //Consumimos Api question intalnet json-server
  useEffect(() => {
    try {
      const callApiQuestions = async () => {
        const url = "http://localhost:5000/questions";
        const response = await fetch(url);
        const data = await response.json();
        setGetQuestions(data);
      };
      callApiQuestions();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <IntalnetContext.Provider value={{ dataFormContactus, getQuestions }}>
      {children}
    </IntalnetContext.Provider>
  );
};
