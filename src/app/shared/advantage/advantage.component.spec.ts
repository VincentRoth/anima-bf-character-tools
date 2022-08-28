import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AppMaterialModule } from '../app-material.module';
import { Advantage } from '../models';
import { AdvantageComponent } from './advantage.component';

describe('AdvantageComponent', () => {
  let component: AdvantageComponent;
  let fixture: ComponentFixture<AdvantageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [AdvantageComponent],
        imports: [AppMaterialModule]
      }).compileComponents();
    })
  );

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
