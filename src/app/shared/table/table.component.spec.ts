import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TableComponent],
      imports: [AppMaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    component.table = {
      id: 1,
      title: 'Tests de caractéristique',
      headers: ['Difficulté', 'Valeur'],
      rows: [
        ['Simple', '6+'],
        ['Normal', '10+'],
        ['Complexe', '15+'],
        ['Extrême', '20+']
      ]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
