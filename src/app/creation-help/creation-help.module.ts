import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationHelpComponent } from './creation-help.component';
import { AppMaterialModule } from '../app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CreationHelpComponent],
  imports: [CommonModule, SharedModule, AppMaterialModule]
})
export class CreationHelpModule {}
