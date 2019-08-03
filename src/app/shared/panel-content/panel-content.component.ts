import { Component, Input, OnInit } from '@angular/core';
import {
  ContentPanel,
  ContentTable,
  ContentUnit,
  EContentType,
  ReferenceTable
} from 'src/app/shared/models';
import { ReferenceTableService } from 'src/app/shared/services';

@Component({
  selector: 'app-panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.scss']
})
export class PanelContentComponent implements OnInit {
  @Input() content: ContentUnit;
  @Input() level: number;
  table: ReferenceTable;

  constructor(private refTablesService: ReferenceTableService) {}

  ngOnInit() {
    if (this.content.type === EContentType.TABLE) {
      this.refTablesService
        .getByReference((this.content as ContentTable).reference)
        .subscribe({ next: data => (this.table = data) });
    }
    if (!this.level) {
      this.level = 1;
    }
  }

  get eContentType() {
    return EContentType;
  }

  get isParentPanel() {
    return (
      (this.content as ContentPanel).content &&
      (this.content as ContentPanel).content.some(
        unit => unit.type === EContentType.PANEL
      )
    );
  }
}
