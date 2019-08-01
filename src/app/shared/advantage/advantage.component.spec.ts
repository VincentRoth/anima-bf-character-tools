import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMaterialModule } from 'src/app/app-material.module';
import { Advantage } from 'src/app/shared/models';
import { AdvantageComponent } from './advantage.component';

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
      costs: [1],
      types: ['Avantage Général']
    } as Advantage;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
