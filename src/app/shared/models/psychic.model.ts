import { ActionType } from './common.model';
import { Tuple } from './general.model';

export type PsychicPower = {
  action: ActionType;
  description: string;
  effects: Tuple<string, 10>;
  level: 1 | 2 | 3;
  maintenance: boolean;
  name: string;
};

export type PsychicDiscipline = {
  description: string;
  modifier?: string;
  modifiers?: [string, string | number][];
  name: string;
  powers: PsychicPower[];
};
