export interface ReferenceTable {
  id: number;
  title: string;
  headers: string[];
  rows: (string | number)[][];
}

export interface ReferenceTableContainer {
  'core-exxet': ReferenceTable[];
}
