import { Component, Input, OnInit } from '@angular/core';
import { ReferenceTable } from '../models';
import { CharacterService } from '../services';

const boldItalicRegExp = /^\*\*\*/;
const boldRegExp = /^\*\*/;
const italicRegExp = /^\*/;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() reference: string;
  @Input() table: ReferenceTable;
  belongsToCharacter: boolean;
  hasBeenToggled: boolean;

  get caption(): string {
    if (!this.table) {
      return;
    }
    if (typeof this.table.id === 'number') {
      return `Tableau ${this.table.id} : ${this.table.title}`;
    }
    if (this.table.id.startsWith('I') || this.table.id.startsWith('V') || this.table.id.startsWith('X')) {
      return `Encadré ${this.table.id} : ${this.table.title}`;
    }
    return `${this.table.id} : ${this.table.title}`;
  }

  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    this.belongsToCharacter = this.characterHasTable();
    this.hasBeenToggled = false;
  }

  getCellStyle(value: any): string {
    if (typeof value === 'string' && value) {
      if (boldItalicRegExp.test(value)) {
        return 'bold italic';
      }
      if (boldRegExp.test(value)) {
        return 'bold';
      }
      if (italicRegExp.test(value)) {
        return 'italic';
      }
    }
  }

  formatValue(value: any): string {
    if (typeof value === 'string' && value && value.startsWith('*')) {
      return value.replace(/^\**/, '');
    }
    return value;
  }

  private characterHasTable(): boolean {
    return this.characterService.hasRefTable(this.reference);
  }

  toggleTable(): void {
    this.hasBeenToggled = true;
    if (this.characterHasTable()) {
      this.characterService.removeRefTable(this.reference);
    } else {
      this.characterService.addRefTable(this.reference);
    }
    this.belongsToCharacter = this.characterHasTable();
  }
}
