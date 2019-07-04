import { Component, OnInit } from '@angular/core';
import { AdvantageService } from './advantage.service';
import { Advantage } from './advantage.model';

@Component({
  selector: 'app-advantage',
  templateUrl: './advantage.component.html',
  styleUrls: ['./advantage.component.scss']
})
export class AdvantageComponent implements OnInit {
  advantages: Advantage[];
  filteredAvantages: Advantage[];

  types: object;
  search: string;
  selectedType: string;

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

  searchAdvantages(search: string) {
    this.search = search;
    this.filterAdvantages();
  }

  searchType(type: string) {
    this.selectedType = type;
    this.filterAdvantages();
  }
}
