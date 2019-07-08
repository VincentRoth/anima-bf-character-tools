export interface ContentUnit {
  type: string;
}

export enum EContentType {
  PANEL = 'panel',
  PARAGRAPH = 'paragraph',
  TABLE = 'table'
}

export interface ContentParagraph {
  title?: string;
  type: 'paragraph';
  content: string;
}

export interface ContentTable {
  type: 'table';
  reference: string;
}

export interface ContentPanel {
  title: string;
  type: 'panel';
  content: ContentUnit[];
}
