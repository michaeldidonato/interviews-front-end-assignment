import { createContext, useState, useContext } from "react";
import type { FC, ReactNode } from "react";

export interface LoadingContextValue {
  loading: boolean;
  setLoading: (update: boolean) => void;
}

interface LoadingProviderProps {
  children?: ReactNode;
}

export const LoadingContext = createContext<LoadingContextValue>({
  loading: false,
  setLoading: () => {},
});

export const LoadingProvider: FC<LoadingProviderProps> = (props) => {
  const { children } = props;
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider
      value={{
        loading,
        setLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
};

export const LoadingConsumer = LoadingContext.Consumer;
export const useLoadingContext = () => useContext(LoadingContext);
