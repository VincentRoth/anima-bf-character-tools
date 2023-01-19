import { Component, Injector, OnInit } from '@angular/core';

import { MagicPath, MagicPathStatus, SpellType } from '../shared/models';
import { AbstractSearchComponent } from '../shared/search/abstract-search.component';
import { SpellsSearchParams } from '../shared/search/spells-search.params';
import { SpellService } from '../shared/services';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent extends AbstractSearchComponent<SpellsSearchParams> implements OnInit {
  magicPaths: MagicPath[];
  get spellTypes(): SpellType[] {
    return Object.values(SpellType).sort();
  }

  constructor(private spellService: SpellService, injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.initFilters({ q: null, type: null });

    this.spellService.get().subscribe({
      next: (data) => {
        this.magicPaths = data;

        if (Object.values(this.filters).some(Boolean)) {
          this.handleSearch(this.filters, 0);
        }

        this.magicPaths.sort((p1, p2) => {
          if (p1.status === MagicPathStatus.SECONDARY && p1.status === p2.status) {
            return p1.name.localeCompare(p2.name);
          }
          return -1;
        });
      }
    });
  }

  searchSpells(q: string): void {
    this.handleSearch({ ...this.filters, q });
  }

  searchType(type: SpellType): void {
    this.handleSearch({ ...this.filters, type });
  }

  protected search(params: SpellsSearchParams): void {
    this.spellService.filter(params).subscribe({
      next: (data) => {
        this.magicPaths = data;
      }
    });
  }
}
