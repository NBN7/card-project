import { TCard } from "../types/card";

export const compareCards = (
  playedCard: TCard,
  playedCardNumber: number,
  boardCard: TCard,
  boardCardNumber: number
) => {
  if (playedCard.stats[playedCardNumber] > boardCard.stats[boardCardNumber]) {
    // TODO: Card Win Function
    console.log(`numero ${playedCardNumber} gana contra ${boardCardNumber}`);
  } else {
    // TODO: Card Lose Function
    console.log(`numero ${playedCardNumber} pierde contra ${boardCardNumber}`);
  }
};
