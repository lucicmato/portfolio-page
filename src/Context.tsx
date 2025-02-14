import React, { createContext, ReactNode, RefObject, useRef } from 'react';

interface ContextType {
  refConnectSection: RefObject<HTMLElement>;
}

export const MyContext = createContext<ContextType | undefined>(undefined);

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const refConnectSection = useRef<HTMLElement>(null);

  return <MyContext.Provider value={{ refConnectSection }}>{children}</MyContext.Provider>;
};

export default ContextProvider;
