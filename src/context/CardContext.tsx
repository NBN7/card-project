import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import type { TCard } from "../types/card";

type CardContextType = {
  selectedCard: TCard | null;
  setSelectedCard: Dispatch<SetStateAction<TCard | null>>;
};

export const CardContext = createContext<CardContextType | null>(null);

type CardContextProviderProps = {
  children: React.ReactNode;
};

export const CardContextProvider = ({ children }: CardContextProviderProps) => {
  const [selectedCard, setSelectedCard] = useState<TCard | null>(null);

  return (
    <CardContext.Provider value={{ selectedCard, setSelectedCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }
  return context;
};
