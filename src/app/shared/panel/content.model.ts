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
  title: string;
  type: EContentType.LINK;
  link: string;
}

export interface ContentParagraph extends ContentUnit {
  title?: string;
  type: EContentType.PARAGRAPH | EContentType.SUB_PARAGRAPH;
  content: string;
}

export interface ContentTable extends ContentUnit {
  type: EContentType.TABLE;
  reference: string;
}

export interface ContentPanel extends ContentUnit {
  title: string;
  type: EContentType.PANEL;
  content: ContentUnit[];
}
