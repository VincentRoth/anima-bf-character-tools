import { NgModule } from '@angular/core';
import { AdvantagesComponent } from './advantages.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AdvantagesComponent],
  imports: [SharedModule]
})
export class AdvantagesModule {}
