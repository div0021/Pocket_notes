import { useContext } from "react";
import { StateContext } from "../Providers/StateProvider";

export const useContextState = () => {
    return useContext(StateContext);
  }
  