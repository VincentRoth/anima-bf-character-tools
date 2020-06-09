import { Component, Injector, OnInit } from '@angular/core';
import { AbstractSearchComponent } from '../shared/abstract-search.component';
import { UnknownAdvantage } from '../shared/models';
import { AdvantagesSearchParams } from '../shared/search-params/advantages-search.params';
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
  private types: object;

  constructor(private advantageService: AdvantageService, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initFilters({ q: null, type: null });

    this.advantageService.get().subscribe({
      next: (data) => {
        this.advantages = data;
        this.types = this.advantageService.getTypes();
        this.filteredAvantages = data;
        this.filteredAvantages.sort(this.advantageService.sort);

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

  protected search(filters: AdvantagesSearchParams): void {
    this.filteredAvantages = this.advantageService.filter(filters).sort(this.advantageService.sort);
  }
}
