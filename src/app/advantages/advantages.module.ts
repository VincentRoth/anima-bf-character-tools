import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdvantagesComponent } from './advantages.component';

@NgModule({
  declarations: [AdvantagesComponent],
  imports: [SharedModule]
})
export class AdvantagesModule {}
