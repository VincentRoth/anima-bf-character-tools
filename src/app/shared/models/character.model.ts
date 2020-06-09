export interface AdvantageReference {
  id: number;
  creationPoints: number;
}

export interface Character {
  raceName: string;
  className: string;
  creationPoints: number;
  advantages: AdvantageReference[];
  disadvantages: AdvantageReference[];
  level: number;
  refTables: string[];
}
