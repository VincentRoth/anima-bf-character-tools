import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationHelpComponent } from './creation-help.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [CreationHelpComponent],
  imports: [CommonModule, AppMaterialModule]
})
export class CreationHelpModule {}
