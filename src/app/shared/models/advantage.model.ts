export interface UnknownAdvantage {
  condition?: string;
  description: string;
  effect: string;
  id: number;
  name: string;
  note?: string;
  source: string;
  special?: string;
  types: string[];
}

export interface Advantage extends UnknownAdvantage {
  costs: number[];
}

export interface Disadvantage extends UnknownAdvantage {
  benefits: number[];
}
