import { createContext } from "react";

export const AppContext = createContext();

export default function ContextHOC({ children }) {
  let valueObj = {};

  return <AppContext.Provider value={valueObj}>{children}</AppContext.Provider>;
}
