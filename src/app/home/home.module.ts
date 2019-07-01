import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AppMaterialModule } from '../app-material.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule, AppMaterialModule]
})
export class HomeModule {}
