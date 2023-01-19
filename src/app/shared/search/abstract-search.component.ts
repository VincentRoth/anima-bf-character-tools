import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { SearchParams } from './search.params';

export abstract class AbstractSearchComponent<T extends SearchParams> {
  filters: T;
  protected activatedRoute: ActivatedRoute;
  protected router: Router;
  private timeout;

  constructor(injector: Injector) {
    this.activatedRoute = injector.get(ActivatedRoute);
    this.router = injector.get(Router);
  }

  handleSearch(params: T, delay = 500): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      this.search(params);
      this.setUrlFilter(params);
    }, delay);
  }

  protected initFilters(params: T): void {
    this.filters = params;
    Object.keys(this.filters).forEach((key) => {
      this.filters[key] = this.activatedRoute.snapshot.queryParamMap.get(key);
    });
  }

  protected abstract search(params: T): void;

  protected setUrlFilter(params: T): void {
    const keys = Object.keys(this.filters);
    if (keys.some((key) => this.filters[key] !== params[key])) {
      keys.forEach((key) => (this.filters[key] = params[key] || null));
      this.router.navigate(['.'], {
        queryParams: this.filters,
        relativeTo: this.activatedRoute
      });
    }
  }
}
