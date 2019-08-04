import { Component, OnInit } from '@angular/core';
import { AbstractSearchComponent } from 'src/app/shared/abstract-search.component';
import { ReferenceTableContainer } from 'src/app/shared/models';
import { ReferenceTableService } from 'src/app/shared/services';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent extends AbstractSearchComponent implements OnInit {
  refTables: ReferenceTableContainer;

  constructor(private referenceTableService: ReferenceTableService) {
    super();
  }

  ngOnInit() {
    this.referenceTableService.get().subscribe({
      next: data => (this.refTables = data)
    });
  }

  get books() {
    return this.referenceTableService.books;
  }

  protected search(filter: string) {
    this.referenceTableService.filterByToken(filter).subscribe({
      next: data => (this.refTables = data)
    });
  }
}
