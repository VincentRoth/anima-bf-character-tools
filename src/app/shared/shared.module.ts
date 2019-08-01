import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PanelContentComponent } from './panel/panel-content/panel-content.component';
import { ContentTitleComponent } from './panel/content-title/content-title.component';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from '../app-material.module';
import { AdvantageComponent } from './advantage/advantage.component';

@NgModule({
  declarations: [
    TableComponent,
    PanelContentComponent,
    ContentTitleComponent,
    AdvantageComponent
  ],
  imports: [CommonModule, RouterModule, AppMaterialModule],
  exports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,
    TableComponent,
    PanelContentComponent,
    ContentTitleComponent,
    AdvantageComponent
  ]
})
export class SharedModule {}
