import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvantageComponent } from './advantage.component';
import { AppMaterialModule } from 'src/app/app-material.module';

describe('AdvantageComponent', () => {
  let component: AdvantageComponent;
  let fixture: ComponentFixture<AdvantageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdvantageComponent],
      imports: [AppMaterialModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvantageComponent);
    component = fixture.componentInstance;
    component.advantage = {
      name: 'advantage',
      description: 'description',
      effect: 'effect',
      source: 'source',
      types: ['Avantage Général']
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
