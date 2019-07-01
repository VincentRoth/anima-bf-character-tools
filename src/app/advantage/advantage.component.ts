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

  constructor(private advantageService: AdvantageService) {}

  ngOnInit() {
    this.advantageService.get().subscribe({
      next: data => {
        this.advantages = data;
        this.filteredAvantages = data;
        this.filteredAvantages.sort(this.advantageService.sort);
      }
    });
  }

  filterAdvantages(filter: string) {
    const tokens = filter.split(' ');
    this.filteredAvantages = this.advantages.filter(advantage => {
      return this.advantageService.filter(advantage, tokens);
    });
    this.filteredAvantages.sort(this.advantageService.sort);
  }
}
