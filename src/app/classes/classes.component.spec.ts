import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesComponent } from './classes.component';
import { AppMaterialModule } from '../app-material.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ClassesComponent', () => {
  let component: ClassesComponent;
  let fixture: ComponentFixture<ClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassesComponent],
      imports: [HttpClientTestingModule, AppMaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
