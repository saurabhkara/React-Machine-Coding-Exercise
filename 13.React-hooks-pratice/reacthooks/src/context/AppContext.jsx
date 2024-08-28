import { createContext } from "react";

export const UserContext = createContext();

export default function AppContext(props) {
  const phone = "+1 25765866";
  return (
    <UserContext.Provider value={phone}>{props.children}</UserContext.Provider>
  );
}
