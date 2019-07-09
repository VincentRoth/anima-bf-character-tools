import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [TablesComponent],
  imports: [CommonModule, SharedModule, AppMaterialModule]
})
export class TablesModule {}
