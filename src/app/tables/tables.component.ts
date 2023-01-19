import { Component, Injector, OnInit } from '@angular/core';

import { ReferenceBook, ReferenceTableContainer } from '../shared/models';
import { AbstractSearchComponent } from '../shared/search/abstract-search.component';
import { SearchParams } from '../shared/search/search.params';
import { ReferenceTableService } from '../shared/services';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent extends AbstractSearchComponent<SearchParams> implements OnInit {
  get books(): ReferenceBook[] {
    return this.referenceTableService.books;
  }
  refTables: ReferenceTableContainer;

  constructor(private referenceTableService: ReferenceTableService, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initFilters({ q: null });

    this.referenceTableService.get().subscribe({
      next: (data) => {
        this.refTables = data;

        if (this.filters.q) {
          this.handleSearch(this.filters, 0);
        }
      }
    });
  }

  protected search(params: SearchParams): void {
    this.referenceTableService.filter(params).subscribe({
      next: (data) => {
        this.refTables = data;
      }
    });
  }
}
