import { MatToolbarModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }