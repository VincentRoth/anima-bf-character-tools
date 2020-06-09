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
  effect: string;
  level: CastingLevel;
  maintenance: number;
  requiredIntelligence: number;
  zeon: number;
}

export const FREE_ACCESS_LEVEL = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

export interface Spell {
  action: ActionType;
  castingLevels: SpellCastingLevel[];
  effect: string;
  forbiddenPaths?: string[];
  isDailyMaintenance?: boolean;
  isFreeAccess?: boolean;
  // For free access spell, level is a ten
  level: number;
  name: string;
  note?: string;
  specialMaintenance?: string;
  types: SpellType[];
}

export interface Spell {
  action: ActionType;
  castingLevels: SpellCastingLevel[];
  effect: string;
  forbiddenPaths?: string[];
  isDailyMaintenance?: boolean;
  isFreeAccess?: boolean;
  // For free access spell, level is a ten
  level: number;
  maxFreeAccessLevel?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
  name: string;
  types: SpellType[];
}

export enum MagicPathStatus {
  MAJOR = 'Majeure',
  MINOR = 'Mineure',
  SECONDARY = 'Secondaire',
  FREE = 'Accès Libre'
}

interface AbstractMagicPath {
  description: string;
  forbiddenPaths?: string[];
  limits?: string;
  name: string;
  oppositePaths?: string[];
  permittedPaths?: string[];
  spells: Spell[];
  status: MagicPathStatus;
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

export declare type MagicPath = MagicPrimaryPath | MagicSecondaryPath | FreeAccessSpells;
