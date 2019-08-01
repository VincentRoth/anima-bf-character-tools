import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RacesComponent } from './races.component';

@NgModule({
  declarations: [RacesComponent],
  imports: [SharedModule]
})
export class RacesModule {}
