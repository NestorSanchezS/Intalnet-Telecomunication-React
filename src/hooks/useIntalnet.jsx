import { useContext } from "react";
import { IntalnetContext } from "../context/IntalnetProvider";

export const useIntalnet = () => {
  return useContext(IntalnetContext);
};
