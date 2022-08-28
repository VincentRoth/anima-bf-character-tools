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
  arcanaExxet: ReferenceTable[];
  coreExxet: ReferenceTable[];
  cqmpn: ReferenceTable[];
  dominusExxet: ReferenceTable[];
  gaia1: ReferenceTable[];
  gaia2: ReferenceTable[];
  kitMj: ReferenceTable[];
  prometheumExxet: ReferenceTable[];
}

export interface ReferenceBook {
  reference:
    | 'coreExxet'
    | 'kitMj'
    | 'dominusExxet'
    | 'arcanaExxet'
    | 'prometheumExxet'
    | 'gaia1'
    | 'gaia2'
    | 'cqmpn';
  title: string;
}

export const referenceBooks: ReferenceBook[] = [
  { reference: 'coreExxet', title: 'Core Exxet' },
  { reference: 'kitMj', title: 'Kit du Meneur de Jeu' },
  { reference: 'dominusExxet', title: 'Dominus Exxet' },
  { reference: 'arcanaExxet', title: 'Arcana Exxet' },
  { reference: 'prometheumExxet', title: 'Prometheum Exxet' },
  { reference: 'gaia1', title: 'Gaïa : Volume I' },
  { reference: 'gaia2', title: 'Gaïa : Volume II' },
  { reference: 'cqmpn', title: 'Ceux qui Marchaient Parmi Nous' }
];
