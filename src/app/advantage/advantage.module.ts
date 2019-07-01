import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvantageComponent } from './advantage.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [AdvantageComponent],
  imports: [CommonModule, AppMaterialModule]
})
export class AdvantageModule {}
