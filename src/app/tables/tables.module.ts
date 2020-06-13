import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TablesComponent } from './tables.component';

@NgModule({
  declarations: [TablesComponent],
  imports: [SharedModule]
})
export class TablesModule {}
