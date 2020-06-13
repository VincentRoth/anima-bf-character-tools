export interface AdvantageReference {
  creationPoints: number;
  id: number;
}

export interface Character {
  advantages: AdvantageReference[];
  className: string;
  creationPoints: number;
  disadvantages: AdvantageReference[];
  level: number;
  raceName: string;
  refTables: string[];
}
