import { Component, OnInit } from '@angular/core';
import { ReferenceTableService } from '../shared/reference-table/reference-table.service';
import {
  ReferenceTableContainer,
  ReferenceTable,
  referenceBooks
} from '../shared/reference-table/reference-table.model';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {
  refTables: ReferenceTableContainer;

  constructor(private referenceTableService: ReferenceTableService) {}

  ngOnInit() {
    this.referenceTableService.referenceTables.subscribe({
      next: data => (this.refTables = data)
    });
  }

  get books() {
    return referenceBooks;
  }

  searchTables(search: string) {
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
}
