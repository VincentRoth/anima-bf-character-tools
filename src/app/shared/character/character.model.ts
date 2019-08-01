import { UnknownAdvantage } from 'src/app/shared/advantage/advantage.model';

export interface CharacterUnknownAdvantage extends UnknownAdvantage {
  creationPoints: number;
}
export interface CharacterAdvantage extends CharacterUnknownAdvantage {
  costs: number[];
}
export interface CharacterDisadvantage extends CharacterUnknownAdvantage {
  benefits: number[];
}

export interface Character {
  raceName: string;
  className: string;
  creationPoints: number;
  advantages: CharacterAdvantage[];
  disadvantages: CharacterDisadvantage[];
  level: number;
  refTables: string[];
}
