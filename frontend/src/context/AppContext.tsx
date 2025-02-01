import { createContext } from "react";

interface AppContextInterface {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}
const defaultContextValue: AppContextInterface = {
  user: false,
  setUser: () => {}, // A no-op function as a placeholder
};
export const AppContext =
  createContext<AppContextInterface>(defaultContextValue);
