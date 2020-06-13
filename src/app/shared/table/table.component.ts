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
  belongsToCharacter: boolean;
  hasBeenToggled: boolean;
  @Input() reference: string;
  @Input() table: ReferenceTable;

  constructor(private characterService: CharacterService) {}

  formatValue(value: any): string {
    if (typeof value === 'string' && value && value.startsWith('*')) {
      return value.replace(/^\**/, '');
    }
    return value;
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

  ngOnInit(): void {
    this.belongsToCharacter = this.characterHasTable();
    this.hasBeenToggled = false;
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

  private characterHasTable(): boolean {
    return this.characterService.hasRefTable(this.reference);
  }
}
