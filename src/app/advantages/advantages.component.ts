import { Component, OnInit } from '@angular/core';
import { AbstractSearchComponent } from 'src/app/shared/abstract-search.component';
import { UnknownAdvantage } from 'src/app/shared/models';
import { AdvantageService } from 'src/app/shared/services';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent extends AbstractSearchComponent
  implements OnInit {
  private advantages: UnknownAdvantage[];
  filteredAvantages: UnknownAdvantage[];

  private types: object;
  private filter: string;
  private selectedType: string;

  constructor(private advantageService: AdvantageService) {
    super();
  }

  ngOnInit() {
    this.advantageService.get().subscribe({
      next: data => {
        this.advantages = data;
        this.types = this.advantageService.getTypes(data);
        this.filteredAvantages = data;
        this.filteredAvantages.sort(this.advantageService.sort);
      }
    });
  }

  get typesKeys(): string[] {
    return this.types ? Object.keys(this.types).sort() : [];
  }

  protected search() {
    let filteredAvantages = this.advantages;

    if (this.selectedType) {
      filteredAvantages = this.advantageService.filterByType(
        filteredAvantages,
        this.selectedType
      );
    }

    if (this.search) {
      filteredAvantages = this.advantageService.filterByToken(
        filteredAvantages,
        this.filter
      );
    }

    filteredAvantages.sort(this.advantageService.sort);
    this.filteredAvantages = filteredAvantages;
  }

  searchAdvantages(filter: string) {
    this.filter = filter;
    this.handleSearch();
  }

  searchType(type: string) {
    this.selectedType = type;
    this.handleSearch();
  }
}
