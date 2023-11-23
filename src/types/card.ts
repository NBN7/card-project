// la card puede ser un objeto o null
// (porque al principio no hay ninguna carta)

export type TCard = {
  id: number;
  name: string;
  image: string;
  stats: [number, number, number, number];
  boardPosition?: number;
  player?: number;
} | null;
