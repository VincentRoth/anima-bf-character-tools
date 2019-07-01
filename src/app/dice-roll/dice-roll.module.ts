import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiceRollComponent } from './dice-roll.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [DiceRollComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class DiceRollModule { }
