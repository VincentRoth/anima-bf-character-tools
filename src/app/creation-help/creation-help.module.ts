import { NgModule } from '@angular/core';
import { CreationHelpComponent } from './creation-help.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CreationHelpComponent],
  imports: [SharedModule]
})
export class CreationHelpModule {}
