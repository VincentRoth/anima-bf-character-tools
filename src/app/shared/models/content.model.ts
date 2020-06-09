export interface ContentUnit {
  type: string;
}

export enum EContentType {
  IMAGE = 'image',
  LINK = 'link',
  PANEL = 'panel',
  PARAGRAPH = 'paragraph',
  SUB_PARAGRAPH = 'sub-paragraph',
  TABLE = 'table'
}

export interface ContentImage extends ContentUnit {
  title: string;
  type: EContentType.IMAGE;
  url: string;
}

export interface ContentLink extends ContentUnit {
  link: string;
  title: string;
  type: EContentType.LINK;
}

export interface ContentParagraph extends ContentUnit {
  content: string;
  title?: string;
  type: EContentType.PARAGRAPH | EContentType.SUB_PARAGRAPH;
}

export interface ContentTable extends ContentUnit {
  reference: string;
  type: EContentType.TABLE;
}

export interface ContentPanel extends ContentUnit {
  content: ContentUnit[];
  title: string;
  type: EContentType.PANEL;
}
