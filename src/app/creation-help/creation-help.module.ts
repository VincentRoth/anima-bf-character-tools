import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CreationHelpComponent } from './creation-help.component';

@NgModule({
  declarations: [CreationHelpComponent],
  imports: [SharedModule]
})
export class CreationHelpModule {}
