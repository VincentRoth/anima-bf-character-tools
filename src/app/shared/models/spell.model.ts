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

export const FREE_ACCESS_LEVEL = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export interface Spell {
  name: string;
  // For free access spell, level is a ten
  level: number;
  action: ActionType;
  types: SpellType[];
  effect: string;
  castingLevels: SpellCastingLevel[];
  specialMaintenance?: string;
  isDailyMaintenance?: boolean;
  forbiddenPaths?: string[];
  isFreeAccess?: boolean;
}

export interface Spell {
  name: string;
  // For free access spell, level is a ten
  level: number;
  action: ActionType;
  types: SpellType[];
  effect: string;
  castingLevels: SpellCastingLevel[];
  isDailyMaintenance?: boolean;
  forbiddenPaths?: string[];
  isFreeAccess?: boolean;
  maxFreeAccessLevel?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
}

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
  oppositePaths?: string[];
  permittedPaths?: string[];
  forbiddenPaths?: string[];
  limits?: string;
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
}

export interface FreeAccessSpells extends AbstractMagicPath {
  status: MagicPathStatus.FREE;
}

export declare type MagicPath =
  | MagicPrimaryPath
  | MagicSecondaryPath
  | FreeAccessSpells;
