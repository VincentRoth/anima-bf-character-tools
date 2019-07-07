import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantagesComponent } from './advantages.component';
import { AppMaterialModule } from '../app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AdvantagesComponent', () => {
  let component: AdvantagesComponent;
  let fixture: ComponentFixture<AdvantagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvantagesComponent],
      imports: [AppMaterialModule, HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
