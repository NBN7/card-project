export type TCard = {
  id: number;
  name: string;
  image: string;
  stats: [number, number, number, number];
  boardPosition?: number;
};
