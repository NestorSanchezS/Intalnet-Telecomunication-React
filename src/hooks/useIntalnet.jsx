import { useContext } from "react";
import { IntalnetContext } from "../context/intalnetProvider";

export const useIntalnet = () => {
  return useContext(IntalnetContext);
};
