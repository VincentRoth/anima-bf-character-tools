import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DiceRollComponent } from './dice-roll.component';

@NgModule({
  declarations: [DiceRollComponent],
  imports: [SharedModule]
})
export class DiceRollModule {}
