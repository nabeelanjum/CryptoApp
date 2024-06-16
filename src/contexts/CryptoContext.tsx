import React, { createContext, useState, useContext, ReactNode } from 'react';

interface CryptoContextProps {
  socketData: any;
  setSocketData: (data: any) => void;
}

interface CryptoProviderProps {
  children: ReactNode;
}

const CryptoContext = createContext<CryptoContextProps | undefined>(undefined);

export const CryptoProvider = ({ children }: CryptoProviderProps) => {
  const [socketData, setSocketData] = useState(null);

  return (
    <CryptoContext.Provider value={{ socketData, setSocketData }}>
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryptoSocket = (): CryptoContextProps => {
  const context = useContext(CryptoContext);
  if (!context) {
    throw new Error('useCryptoSocket must be used within a CryptoProvider');
  }
  return context;
};
