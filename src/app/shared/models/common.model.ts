/* Common game types */
export enum ActionType {
  ACTIVE = 'Active',
  PASSIVE = 'Passive'
}

export interface DifficultyLevel {
  name: string;
  value: number;
}
