export interface ContentUnit {
  type: string;
}

export enum EContentType {
  IMAGE = 'image',
  LINK = 'link',
  PANEL = 'panel',
  PARAGRAPH = 'paragraph',
  TABLE = 'table'
}

export interface ContentImage extends ContentUnit {
  title: string;
  type: 'image';
  url: string;
}

export interface ContentLink extends ContentUnit {
  title: string;
  type: 'link';
  link: string;
}

export interface ContentParagraph extends ContentUnit {
  title?: string;
  type: 'paragraph';
  content: string;
}

export interface ContentTable extends ContentUnit {
  type: 'table';
  reference: string;
}

export interface ContentPanel extends ContentUnit {
  title: string;
  type: 'panel';
  content: ContentUnit[];
}
