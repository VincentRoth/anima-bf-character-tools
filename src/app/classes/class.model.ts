interface MartialAbilities {
  limit: number;
  attack: number;
  block: number;
  dodge: number;
  wearArmor: number;
  ki: number;
  kiAccumulation: number;
}

interface MysticAbilities {
  limit: number;
  zeon: number;
  maMultiple: number;
  magicProjection: number;
  summon: number;
  control: number;
  bind: number;
  banish: number;
}

interface PsychicAbilities {
  limit: number;
  psychicPoint: number;
  psychicProjection: number;
}

interface PrimaryAbilities {
  martial: MartialAbilities;
  mystic: MysticAbilities;
  psychic: PsychicAbilities;
}

interface ReducedCost {
  ability: string;
  cost: number;
}

interface SecondaryAbilities {
  athletics: number;
  social: number;
  perceptive: number;
  intellectual: number;
  vigor: number;
  subterfuge: number;
  creative: number;
  reducedCosts: ReducedCost[];
}

interface InnateBonus {
  ability: string;
  bonus: number;
  limit?: number;
}

interface InnateBonuses {
  primary: InnateBonus[];
  secondary: InnateBonus[];
}

export interface ClassModel {
  name: string;
  description: string;
  archetypes: string[];
  lifePointMult: number;
  lifePointPerLevel: number;
  initiativePerLevel: number;
  martialKnowledgePerLevel: number;
  psychicPointPerLevel: number;
  primary: PrimaryAbilities;
  secondary: SecondaryAbilities;
  bonus: InnateBonuses;
  special: string;
}
