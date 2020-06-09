export interface ReferenceTable {
  headers: string[];
  // For a "real" book table, id is the book table number.
  // For other, can be a roman number like "XIV"
  // or the page and an indice like "p.47" or "p.47.1"
  // in case of multiple non numbered tables on the same page.
  id: number | string;
  rows: (string | number)[][];
  title: string;
}

export interface ReferenceTableContainer {
  'arcana-exxet': ReferenceTable[];
  'core-exxet': ReferenceTable[];
  cqmpn: ReferenceTable[];
  'dominus-exxet': ReferenceTable[];
  'gaia-1': ReferenceTable[];
  'gaia-2': ReferenceTable[];
  'kit-mj': ReferenceTable[];
  'prometheum-exxet': ReferenceTable[];
}

export interface ReferenceBook {
  reference:
    | 'core-exxet'
    | 'kit-mj'
    | 'dominus-exxet'
    | 'arcana-exxet'
    | 'prometheum-exxet'
    | 'gaia-1'
    | 'gaia-2'
    | 'cqmpn';
  title: string;
}

export const referenceBooks: ReferenceBook[] = [
  { reference: 'core-exxet', title: 'Core Exxet' },
  { reference: 'kit-mj', title: 'Kit du Meneur de Jeu' },
  { reference: 'dominus-exxet', title: 'Dominus Exxet' },
  { reference: 'arcana-exxet', title: 'Arcana Exxet' },
  { reference: 'prometheum-exxet', title: 'Prometheum Exxet' },
  { reference: 'gaia-1', title: 'Gaïa : Volume I' },
  { reference: 'gaia-2', title: 'Gaïa : Volume II' },
  { reference: 'cqmpn', title: 'Ceux qui Marchaient Parmi Nous' }
];
