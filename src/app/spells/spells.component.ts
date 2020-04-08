import { Component, OnInit } from '@angular/core';
import { AbstractSearchComponent } from 'src/app/shared/abstract-search.component';
import { MagicPath, SpellType } from 'src/app/shared/models';
import { SpellService } from 'src/app/shared/services';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent extends AbstractSearchComponent implements OnInit {
  magicPaths: MagicPath[];
  private filter: string;
  private selectedType: SpellType;

  constructor(private spellService: SpellService) {
    super();
  }

  ngOnInit() {
    this.spellService.get().subscribe({
      next: data => (this.magicPaths = data)
    });
  }

  get spellTypes(): SpellType[] {
    return Object.values(SpellType).sort();
  }

  protected search(): void {
    this.magicPaths = this.spellService.filterByTokenAndType(
      this.filter,
      this.selectedType
    );
  }

  searchSpells(filter: string) {
    this.filter = filter;
    this.handleSearch(filter);
  }

  searchType(type: SpellType) {
    this.selectedType = type;
    this.handleSearch();
  }
}
