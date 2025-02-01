import { ReactNode, useState } from "react";
import { AppContext } from "../context/AppContext";

function AppContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState(false);

  const value = {
    user,
    setUser,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
