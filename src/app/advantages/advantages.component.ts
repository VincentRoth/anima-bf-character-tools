import { Component, OnInit } from '@angular/core';
import { AdvantageService } from './advantage.service';
import { UnknownAdvantage } from './advantage.model';
import { CharacterService } from '../shared/character/character.service';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit {
  private advantages: UnknownAdvantage[];
  filteredAvantages: UnknownAdvantage[];

  private types: object;
  private search: string;
  private selectedType: string;
  private timeout;

  constructor(private advantageService: AdvantageService) {}

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

  private filterAdvantages() {
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
        this.search
      );
    }

    filteredAvantages.sort(this.advantageService.sort);
    this.filteredAvantages = filteredAvantages;
  }

  private handleSearch() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => this.filterAdvantages(), 500);
  }

  searchAdvantages(search: string) {
    this.search = search;
    this.handleSearch();
  }

  searchType(type: string) {
    this.selectedType = type;
    this.handleSearch();
  }
}
