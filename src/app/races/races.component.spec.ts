import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacesComponent } from './races.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RacesComponent', () => {
  let component: RacesComponent;
  let fixture: ComponentFixture<RacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RacesComponent],
      imports: [HttpClientTestingModule, AppMaterialModule, SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});