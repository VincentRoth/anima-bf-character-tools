import { NgModule } from '@angular/core';
import { RacesComponent } from './races.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [RacesComponent],
  imports: [SharedModule]
})
export class RacesModule {}
