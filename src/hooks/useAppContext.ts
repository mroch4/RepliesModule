import { AppContext } from "../contexts/Context";
import { useContext } from "react";

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
