import { Component, Injector, OnInit } from '@angular/core';

import { UnknownAdvantage } from '../shared/models';
import { AbstractSearchComponent } from '../shared/search/abstract-search.component';
import { AdvantagesSearchParams } from '../shared/search/advantages-search.params';
import { AdvantageService } from '../shared/services';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent extends AbstractSearchComponent<AdvantagesSearchParams> implements OnInit {
  get advantageTypes(): string[] {
    return this.types ? Object.keys(this.types).sort() : [];
  }
  advantages: UnknownAdvantage[];
  filteredAvantages: UnknownAdvantage[];
  types: object;

  constructor(private advantageService: AdvantageService, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initFilters({ q: null, type: null });

    this.advantageService.get().subscribe({
      next: (data) => {
        this.advantages = data;
        this.types = this.advantageService.getTypes();

        if (Object.values(this.filters).some(Boolean)) {
          this.handleSearch(this.filters, 0);
        }
      }
    });
  }

  searchAdvantages(q: string): void {
    this.handleSearch({ ...this.filters, q });
  }

  searchType(type: string): void {
    this.handleSearch({ ...this.filters, type });
  }

  protected search(params: AdvantagesSearchParams): void {
    this.advantageService.filter(params).subscribe({
      next: (data) => {
        this.filteredAvantages = data;
        this.filteredAvantages.sort(this.advantageService.sort);
      }
    });
  }
}
