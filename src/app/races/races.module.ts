import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacesComponent } from './races.component';
import { SharedModule } from '../shared/shared.module';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [RacesComponent],
  imports: [CommonModule, SharedModule, AppMaterialModule]
})
export class RacesModule {}
