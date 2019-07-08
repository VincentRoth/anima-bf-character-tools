export interface ReferenceTable {
  id: number;
  caption: string;
  headers: string[];
  rows: any[];
}

export interface ReferenceTableContainer {
  'core-exxet': ReferenceTable[];
}
