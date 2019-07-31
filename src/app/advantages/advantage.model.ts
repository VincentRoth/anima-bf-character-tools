export interface UnknownAdvantage {
  name: string;
  description: string;
  effect: string;
  condition?: string;
  special?: string;
  note?: string;
  source: string;
  types: string[];
}

export interface Advantage extends UnknownAdvantage {
  costs: number[];
}

export interface Disadvantage extends UnknownAdvantage {
  benefits: number[];
}
