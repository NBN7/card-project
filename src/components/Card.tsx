import type { TCard } from "../types/card";

type CardProps = {
  card: TCard;
};

// hago card?.prop para que no tire error si no hay carta
// (si es undefined)

export const Card = ({ card }: CardProps) => {
  return (
    <div className="select-none grid grid-cols-3 grid-rows-3 sm:grid-cols-5 sm:grid-rows-5 place-items-center font-semibold sm:text-lg text-sm overflow-hidden">
      <div className="col-[2] row-[1] sm:col-[3]">{card?.stats[0]}</div>
      <div className="col-[3] row-[2] sm:col-[5] sm:row-[3]">{card?.stats[1]}</div>
      <div className="col-[2] row-[3] sm:col-[3] sm:row-[5]">{card?.stats[2]}</div>
      <div className="col-[1] row-[2] sm:row-[3]">{card?.stats[3]}</div>
      <div className="col-[2] row-[2] sm:col-[2/5] sm:row-[2/5]">
        <img
          draggable="false"
          className="object-cover w-full h-full"
          src={card?.image}
          alt={card?.name}
        />
      </div>
    </div>
  );
};
