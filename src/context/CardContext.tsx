import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import type { TCard } from "../types/card";

// creo el contrato que va a tener que cumplir CardContext
type CardContextType = {
  selectedCard: TCard | null;
  setSelectedCard: Dispatch<SetStateAction<TCard | null>>;
};

// creo el context y le digo que tiene que cumplir el contrato
export const CardContext = createContext<CardContextType | null>(null);

// creo el contrato que va a tener que cumplir CardContextProvider
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

// creo un hook para usar el context mas facil
export const useCardContext = () => {
  // uso el CardContext
  const context = useContext(CardContext);

  // si no exitse el context tiro un error
  if (!context) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }

  return context;
};
