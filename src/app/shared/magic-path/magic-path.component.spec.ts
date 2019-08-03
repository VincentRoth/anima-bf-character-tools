import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicPathComponent } from './magic-path.component';

describe('MagicPathComponent', () => {
  let component: MagicPathComponent;
  let fixture: ComponentFixture<MagicPathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicPathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicPathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
