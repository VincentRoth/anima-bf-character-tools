import { Component, Injector, OnInit } from '@angular/core';
import { AbstractSearchComponent } from 'src/app/shared/abstract-search.component';
import { UnknownAdvantage } from 'src/app/shared/models';
import { AdvantageService } from 'src/app/shared/services';
import { AdvantagesSearchParams } from './advantages-search.params';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent extends AbstractSearchComponent<AdvantagesSearchParams> implements OnInit {
  advantages: UnknownAdvantage[];
  filteredAvantages: UnknownAdvantage[];
  private types: object;

  get advantageTypes(): string[] {
    return this.types ? Object.keys(this.types).sort() : [];
  }

  constructor(private advantageService: AdvantageService, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initFilters({ q: null, type: null });

    this.advantageService.get().subscribe({
      next: (data) => {
        this.advantages = data;
        this.types = this.advantageService.getTypes(data);
        this.filteredAvantages = data;
        this.filteredAvantages.sort(this.advantageService.sort);

        if (Object.values(this.filters).some(Boolean)) {
          this.handleSearch(this.filters, 0);
        }
      }
    });
  }

  protected search(filters: AdvantagesSearchParams): void {
    let filteredAvantages = this.advantages;

    if (filters.type) {
      filteredAvantages = this.advantageService.filterByType(filteredAvantages, filters.type);
    }

    if (filters.q) {
      filteredAvantages = this.advantageService.filterByToken(filteredAvantages, filters.q);
    }

    filteredAvantages.sort(this.advantageService.sort);
    this.filteredAvantages = filteredAvantages;
  }

  searchAdvantages(q: string): void {
    this.handleSearch({ ...this.filters, q });
  }

  searchType(type: string): void {
    this.handleSearch({ ...this.filters, type });
  }
}
