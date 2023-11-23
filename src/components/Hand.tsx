import { CARDS } from "../constants/cards";
import { Card } from "./Card";

import { useCardContext } from "../context/CardContext";

type HandProps = {
  player: number;
};

export const Hand = ({ player }: HandProps) => {
  const { setSelectedCard } = useCardContext();

  const playerHand = CARDS.slice(0, 5);

  return (
    <div
      className={`absolute w-40 flex flex-col p-2 gap-2 ${
        player === 1 ? ` left-0` : ` right-0`
      }`}
    >
      {playerHand.map((_, index) => (
        <div
          onClick={() => setSelectedCard(playerHand[index])}
          key={index}
          className={`
        border-2 rounded hover:scale-105 active:scale-90 transition-all duration-300 cursor-pointer
        ${
          player === 1
            ? `player1 border-2 border-green-500`
            : `player2 border-red-500`
        }`}
        >
          <Card card={playerHand[index]} />
        </div>
      ))}
    </div>
  );
};
