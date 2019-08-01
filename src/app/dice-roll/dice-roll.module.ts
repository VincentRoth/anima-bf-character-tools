import { NgModule } from '@angular/core';
import { DiceRollComponent } from './dice-roll.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [DiceRollComponent],
  imports: [SharedModule]
})
export class DiceRollModule {}
