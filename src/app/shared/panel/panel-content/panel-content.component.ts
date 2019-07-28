import { Component, OnInit, Input } from '@angular/core';
import {
  ContentUnit,
  EContentType,
  ContentTable,
  ContentPanel
} from '../content.model';
import { ReferenceTableService } from '../../reference-table/reference-table.service';
import { ReferenceTable } from '../../reference-table/reference-table.model';

@Component({
  selector: 'app-panel-content',
  templateUrl: './panel-content.component.html',
  styleUrls: ['./panel-content.component.scss']
})
export class PanelContentComponent implements OnInit {
  @Input() content: ContentUnit;
  @Input() level: number;
  private table: ReferenceTable;

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
      (this.content as ContentPanel).content.filter(
        unit => unit.type === EContentType.PANEL
      ).length
    );
  }
}
