
import { CARDS } from "../constants/cards";
import { Card } from "./Card";

type HandProps = {
  player: number;
};

export const Hand = ({ player }: HandProps) => {
  const playerHand = CARDS.slice(0, 5);

  return (
    <div
      className={`absolute w-40 flex flex-col p-2 gap-2 ${
        player === 1 ? ` left-0` : ` right-0`
      }`}
    >
      {playerHand.map((_, index) => (
        <div
          key={index}
          className={`
        border-2 border-white rounded-md
        ${player === 1 ? `bg-green-600` : `bg-red-600`}`}
        >
          <Card card={playerHand[index]} />
        </div>
      ))}
    </div>
  );
};
