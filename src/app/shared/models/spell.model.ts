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

export interface MainSpell {
  name: string;
  // For free access spell, level is a ten
  level: number;
  action: ActionType;
  types: SpellType[];
  effect: string;
  castingLevels: SpellCastingLevel[];
  isDailyMaintenance?: boolean;
  forbiddenPaths?: string[];
}

export interface FreeAccessSpell {
  level: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  isFreeAccess: true;
}

export declare type Spell = MainSpell | FreeAccessSpell;

export enum MagicPathStatus {
  MAJOR = 'Majeure',
  MINOR = 'Mineure',
  SECONDARY = 'Secondaire',
  FREE = 'Accès Libre'
}

interface AbstractMagicPath {
  name: string;
  status: MagicPathStatus;
  description: string;
  spells: Spell[];
}

export interface MagicPrimaryPath extends AbstractMagicPath {
  oppositePaths: string[];
  status: MagicPathStatus.MAJOR | MagicPathStatus.MINOR;
}

export interface MagicSecondaryPath extends AbstractMagicPath {
  forbiddenPaths: string[];
  limits?: string;
  status: MagicPathStatus.SECONDARY;
  spells: MainSpell[];
}

export interface FreeAccessSpells extends AbstractMagicPath {
  status: MagicPathStatus.FREE;
  spells: MainSpell[];
}

export declare type MagicPath =
  | MagicPrimaryPath
  | MagicSecondaryPath
  | FreeAccessSpells;
