import { Component, Injector, OnInit } from '@angular/core';
import { AbstractSearchComponent } from '../shared/abstract-search.component';
import { ReferenceBook, ReferenceTableContainer } from '../shared/models';
import { SearchParams } from '../shared/search-params/search.params';
import { ReferenceTableService } from '../shared/services';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent extends AbstractSearchComponent<SearchParams> implements OnInit {
  refTables: ReferenceTableContainer;

  get books(): ReferenceBook[] {
    return this.referenceTableService.books;
  }

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

  protected search(filters: SearchParams): void {
    this.referenceTableService.filterByToken(filters.q).subscribe({
      next: (data) => (this.refTables = data)
    });
  }
}
