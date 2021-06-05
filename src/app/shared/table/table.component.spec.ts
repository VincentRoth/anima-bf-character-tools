import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [TableComponent]
      }).compileComponents();
    })
  );

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
