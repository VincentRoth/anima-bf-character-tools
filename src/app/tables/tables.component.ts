import { Component, OnInit } from '@angular/core';
import {
  referenceBooks,
  ReferenceTable,
  ReferenceTableContainer
} from 'src/app/shared/models';
import { ReferenceTableService } from 'src/app/shared/services';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  refTables: ReferenceTableContainer;
  private timeout;

  constructor(private referenceTableService: ReferenceTableService) {}

  ngOnInit() {
    this.referenceTableService.referenceTables.subscribe({
      next: data => (this.refTables = data)
    });
  }

  get books() {
    return referenceBooks;
  }

  private searchTables(search: string) {
    const tokens = search.toLocaleLowerCase().split(' ');
    this.referenceTableService.referenceTables.subscribe({
      next: data => {
        this.refTables = data;
        this.books.forEach(book => {
          this.refTables[book.reference] = this.refTables[
            book.reference
          ].filter((table: ReferenceTable) =>
            tokens.reduce((isSelected: boolean, token: string) => {
              return (
                isSelected &&
                (table.id
                  .toString()
                  .toLocaleLowerCase()
                  .includes(token) ||
                  table.title.toLocaleLowerCase().includes(token) ||
                  table.headers.filter(header =>
                    header.toLocaleLowerCase().includes(token)
                  ).length ||
                  table.rows.filter(
                    row =>
                      row.filter(cell =>
                        cell
                          .toString()
                          .toLocaleLowerCase()
                          .includes(token)
                      ).length
                  ).length)
              );
            }, true)
          );
        });
      }
    });
  }

  handleSearch(search: string) {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => this.searchTables(search), 500);
  }
}
