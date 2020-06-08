import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AbstractSearchComponent } from 'src/app/shared/abstract-search.component';
import { ReferenceTableContainer } from 'src/app/shared/models';
import { ReferenceTableService } from 'src/app/shared/services';
import { TablesParams } from './tables.params';
@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent extends AbstractSearchComponent implements OnInit {
  refTables: ReferenceTableContainer;
  filters: TablesParams;

  constructor(
    private referenceTableService: ReferenceTableService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.filters = {
      q: this.getUrlFilter()
    };

    this.referenceTableService.get().subscribe({
      next: (data) => {
        this.refTables = data;

        if (this.filters.q) {
          this.handleSearch(this.filters.q);
        }
      }
    });
  }

  get books() {
    return this.referenceTableService.books;
  }

  protected search(filter: string) {
    this.setUrlFilter(filter);
    this.referenceTableService.filterByToken(filter).subscribe({
      next: (data) => (this.refTables = data)
    });
  }

  private getUrlFilter(): string {
    return this.activatedRoute.snapshot.queryParamMap.get('q');
  }

  private setUrlFilter(filter: string): void {
    if (this.filters.q !== filter) {
      this.filters.q = filter ? filter : null;
      this.router.navigate(['.'], {
        queryParams: this.filters,
        relativeTo: this.activatedRoute
      });
    }
  }
}
