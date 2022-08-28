import { Component, Input, OnInit } from '@angular/core';

import { ContentPanel, ContentTable, ContentUnit, EContentType, ReferenceTable } from '../models';
import { ReferenceTableService } from '../services';

@Component({
  selector: 'app-panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.scss']
})
export class PanelContentComponent implements OnInit {
  @Input() content: ContentUnit;
  @Input() level: number;
  table: ReferenceTable;

  get eContentType(): typeof EContentType {
    return EContentType;
  }

  get isParentPanel(): boolean {
    return (
      (this.content as ContentPanel).content &&
      (this.content as ContentPanel).content.some((unit) => unit.type === EContentType.PANEL)
    );
  }

  constructor(private refTablesService: ReferenceTableService) {}

  ngOnInit(): void {
    if (this.content.type === EContentType.TABLE) {
      this.refTablesService
        .getByReference((this.content as ContentTable).reference)
        .subscribe({ next: (data) => (this.table = data) });
    }
    if (!this.level) {
      this.level = 1;
    }
  }
}
