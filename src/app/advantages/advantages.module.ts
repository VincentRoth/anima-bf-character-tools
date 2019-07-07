import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvantagesComponent } from './advantages.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [AdvantagesComponent],
  imports: [CommonModule, AppMaterialModule]
})
export class AdvantagesModule {}
