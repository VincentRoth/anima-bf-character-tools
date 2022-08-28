import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppMaterialModule } from '../app-material.module';
import { ActionType, SpellType } from '../models';
import { SpellComponent } from './spell.component';

describe('SpellComponent', () => {
  let component: SpellComponent;
  let fixture: ComponentFixture<SpellComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [SpellComponent],
        imports: [AppMaterialModule]
      }).compileComponents();
    })
  );

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
