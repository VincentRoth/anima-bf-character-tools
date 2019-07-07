import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationHelpComponent } from './creation-help.component';

describe('CreationHelpComponent', () => {
  let component: CreationHelpComponent;
  let fixture: ComponentFixture<CreationHelpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationHelpComponent ]
    })
    .compileComponents();
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
