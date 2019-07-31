import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvantagesComponent } from './advantages.component';
import { AppMaterialModule } from '../app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AdvantagesComponent],
  imports: [CommonModule, AppMaterialModule, SharedModule]
})
export class AdvantagesModule {}
