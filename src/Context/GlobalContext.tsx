import React, { FC, createContext, useReducer, Context } from "react";
import { State, Dispatch } from "../models";
import AppReducer from "./AppReducer";

//initial state
const initialState: State = {
  playerName: "",
  score: 0,
  screen: "initial",
};

//create context
export const GlobalStateContext = createContext<State>(initialState);
export const GlobalDispatchContext: Context<Dispatch> = createContext<
  Dispatch | undefined | any
>(AppReducer);

//provider component
export const GlobalProvider: FC<{ children: any }> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalStateContext.Provider value={state}>
      <GlobalDispatchContext.Provider value={dispatch}>
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalProvider;
