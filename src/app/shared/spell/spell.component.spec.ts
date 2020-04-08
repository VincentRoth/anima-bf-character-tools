import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMaterialModule } from 'src/app/app-material.module';
import { ActionType, SpellType } from 'src/app/shared/models';
import { SpellComponent } from './spell.component';

describe('SpellComponent', () => {
  let component: SpellComponent;
  let fixture: ComponentFixture<SpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpellComponent],
      imports: [AppMaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellComponent);
    component = fixture.componentInstance;
    component.spell = {
      action: ActionType.ACTIVE,
      castingLevels: [],
      effect: 'effect',
      level: 10,
      name: 'name',
      types: [SpellType.EFFECT]
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
