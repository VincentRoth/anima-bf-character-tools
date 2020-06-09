import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppMaterialModule } from '../app-material.module';
import { MagicPathStatus } from '../models';
import { SpellComponent } from '../spell/spell.component';
import { MagicPathComponent } from './magic-path.component';

describe('MagicPathComponent', () => {
  let component: MagicPathComponent;
  let fixture: ComponentFixture<MagicPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MagicPathComponent, SpellComponent],
      imports: [AppMaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicPathComponent);
    component = fixture.componentInstance;
    component.magicPath = {
      description: 'description',
      name: 'name',
      oppositePaths: ['oppositePath'],
      spells: [],
      status: MagicPathStatus.MAJOR
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
