export enum ActionType {
  ACTIVE = 'Active',
  PASSIVE = 'Passive'
}

export enum SpellType {
  ATTACK = 'Attaque',
  AUTOMATIC = 'Automatique',
  DEFENSE = 'Défense',
  DETECTION = 'Détection',
  EFFECT = 'Effet',
  SPIRITUAL = 'Animique'
}

export enum CastingLevel {
  BASE = 'Initial',
  INTERMEDIATE = 'Intermédiaire',
  ADVANCED = 'Avancé',
  ARCANE = 'Arcane'
}

export interface SpellCastingLevel {
  level: CastingLevel;
  zeon: number;
  requiredIntelligence: number;
  effect: string;
  maintenance: number;
}

interface MainSpell {
  name: string;
  // For free access spell, level is a ten
  level: number;
  action: ActionType;
  type: SpellType[];
  effect: string;
  castingLevels: SpellCastingLevel[];
  isDailyMaintenance?: boolean;
  forbiddenPaths?: string[];
}

interface FreeAccessSpell {
  level: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  isFreeAccess: true;
}

export declare type Spell = MainSpell | FreeAccessSpell;

export enum MagicPathStatus {
  MAJOR = 'Majeure',
  MINOR = 'Mineure',
  SECONDARY = 'Secaondaire',
  FREE = 'Libre'
}

interface AbstractMagicPath {
  name: string;
  status: MagicPathStatus;
  description: string;
  spells: Spell[];
}

interface MagicPrimaryPath extends AbstractMagicPath {
  oppositePaths: string[];
  status: MagicPathStatus.MAJOR | MagicPathStatus.MINOR;
}

interface MagicSecondaryPath extends AbstractMagicPath {
  forbiddenPaths: string[];
  status: MagicPathStatus.SECONDARY;
  spells: MainSpell[];
}

interface FreeAccessPath extends AbstractMagicPath {
  status: MagicPathStatus.FREE;
  spells: MainSpell[];
}

export declare type MagicPath =
  | MagicPrimaryPath
  | MagicSecondaryPath
  | FreeAccessPath;
