import { Component, OnInit, Input } from '@angular/core';
import { ReferenceTable } from '../reference-table/reference-table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() table: ReferenceTable;

  constructor() {}

  ngOnInit() {}
}
