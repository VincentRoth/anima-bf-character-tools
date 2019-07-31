import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetComponent } from './character-sheet.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CharacterSheetComponent', () => {
  let component: CharacterSheetComponent;
  let fixture: ComponentFixture<CharacterSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterSheetComponent],
      imports: [SharedModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
