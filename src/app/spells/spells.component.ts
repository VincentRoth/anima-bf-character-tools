import { Component, OnInit } from '@angular/core';
import { MagicPath } from 'src/app/shared/models';
import { SpellService } from './spell.service';

@Component({
  selector: 'app-spells',
  templateUrl: './spells.component.html',
  styleUrls: ['./spells.component.scss']
})
export class SpellsComponent implements OnInit {
  magicPaths: MagicPath[];

  constructor(private spellService: SpellService) {}

  ngOnInit() {
    this.spellService.get().subscribe(data => (this.magicPaths = data));
  }
}
