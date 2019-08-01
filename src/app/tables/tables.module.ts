import { NgModule } from '@angular/core';
import { TablesComponent } from './tables.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [TablesComponent],
  imports: [SharedModule]
})
export class TablesModule {}
