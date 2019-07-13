import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationHelpComponent } from './creation-help.component';
import { AppMaterialModule } from '../app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '../shared/shared.module';

describe('CreationHelpComponent', () => {
  let component: CreationHelpComponent;
  let fixture: ComponentFixture<CreationHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreationHelpComponent],
      imports: [AppMaterialModule, SharedModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
