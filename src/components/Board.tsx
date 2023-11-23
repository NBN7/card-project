import { useState } from "react";
import { MagicMotion } from "react-magic-motion";

import { useCardContext } from "../context/CardContext";

import { Field } from "./Field";
import { FIELDS } from "../constants/fields";

import { Card } from "./Card";
import { TCard } from "../types/card";

import { Hand } from "./Hand";

export const Board = () => {
  // agarro la carta seleccionada del context
  const { selectedCard } = useCardContext();

  // hago un state para que cuando cambie el board se
  // vuelva a renderizar el field con la carta puesta
  const [board, setBoard] = useState<TCard[]>(FIELDS);

  // cada vez que se haga click en un field se ejecuta
  // esta funcion
  const handleClick = (position: number, card: TCard) => {
    // hago un clon del board para no mutarlo
    const newBoard = structuredClone(board);

    // pongo la carta en el field
    newBoard[position] = card;

    // actualizo el board
    setBoard(newBoard);
  };

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <MagicMotion>
        <>
          <Hand player={1} />
          <div className="grid grid-cols-3 place-items-center gap-2">
            {board.map((_, index) => (
              <Field
                handleClick={() => handleClick(index, selectedCard)}
                key={index}
              >
                <Card card={board[index]} />
              </Field>
            ))}
          </div>
          <Hand player={2} />
        </>
      </MagicMotion>
    </section>
  );
};
