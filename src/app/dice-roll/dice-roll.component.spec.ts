import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiceRollComponent } from './dice-roll.component';

describe('DiceRollComponent', () => {
  let component: DiceRollComponent;
  let fixture: ComponentFixture<DiceRollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiceRollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiceRollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
