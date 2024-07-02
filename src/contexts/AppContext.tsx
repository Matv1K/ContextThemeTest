import React, { createContext, useState } from "react";

interface AppContextProps {
  children: React.ReactNode;
}

interface DefaultContextType {
  darkTheme: boolean;
  setDarkTheme: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultContextValue: DefaultContextType = {
  darkTheme: false,
  setDarkTheme: () => {},
};

const AppContext = createContext<DefaultContextType>(defaultContextValue);

const AppProvider: React.FC<AppContextProps> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
