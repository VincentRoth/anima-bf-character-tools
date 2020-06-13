import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SpellsComponent } from './spells.component';

@NgModule({
  declarations: [SpellsComponent],
  imports: [SharedModule]
})
export class SpellsModule {}
