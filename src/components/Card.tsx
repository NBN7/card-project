import type { TCard } from "../types/card";

type CardProps = {
  card: TCard;
};

// hago card?.prop para que no tire error si no hay carta
// (si es undefined)

export const Card = ({ card }: CardProps) => {
  return (
    <div className="select-none grid grid-cols-5 grid-rows-5 place-items-center font-semibold text-lg">
      <div className="col-[3] ">{card?.stats[0]}</div>
      <div className="col-[5] row-[3] ">{card?.stats[1]}</div>
      <div className="col-[3] row-[5] ">{card?.stats[2]}</div>
      <div className="col-[1] row-[3] ">{card?.stats[3]}</div>
      <div className=" col-[2/5] row-[2/5] ">
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
