interface MartialAbilities {
  attack: number;
  block: number;
  dodge: number;
  ki: number;
  kiAccumulation: number;
  limit: number;
  wearArmor: number;
}

interface MysticAbilities {
  banish: number;
  bind: number;
  control: number;
  limit: number;
  magicProjection: number;
  maMultiple: number;
  summon: number;
  zeon: number;
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
  creative: number;
  intellectual: number;
  perceptive: number;
  reducedCosts: ReducedCost[];
  social: number;
  subterfuge: number;
  vigor: number;
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
  archetypes: string[];
  bonus: InnateBonuses;
  description: string;
  initiativePerLevel: number;
  lifePointMult: number;
  lifePointPerLevel: number;
  martialKnowledgePerLevel: number;
  name: string;
  primary: PrimaryAbilities;
  psychicPointPerLevel: number;
  secondary: SecondaryAbilities;
  special: string;
}
