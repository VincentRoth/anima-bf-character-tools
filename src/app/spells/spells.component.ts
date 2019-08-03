import { Component, OnInit } from '@angular/core';
import { AbstractSearchComponent } from 'src/app/shared/abstract-search.component';
import { MagicPath } from 'src/app/shared/models';
import { SpellService } from 'src/app/shared/services';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent extends AbstractSearchComponent implements OnInit {
  magicPaths: MagicPath[];

  constructor(private spellService: SpellService) {
    super();
  }

  protected search(filter: string): void {
    this.magicPaths = this.spellService.filterByToken(filter);
  }

  handleFilter(filter: string) {
    this.handleSearch(filter);
  }

  ngOnInit() {
    this.spellService.get().subscribe({
      next: data => (this.magicPaths = data)
    });
  }
}
