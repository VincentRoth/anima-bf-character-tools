import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [ClassesComponent],
  imports: [CommonModule, AppMaterialModule]
})
export class ClassesModule {}
