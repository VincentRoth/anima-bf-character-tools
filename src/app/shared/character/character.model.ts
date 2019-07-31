import { Advantage } from 'src/app/advantages/advantage.model';

export interface Character {
  raceName: string;
  className: string;
  creationPoints: number;
  advantages: Advantage[];
  level: number;
  refTables: (string | number)[];
}
