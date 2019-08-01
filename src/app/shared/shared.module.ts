import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { AdvantageComponent } from './advantage/advantage.component';
import { ContentTitleComponent } from './panel/content-title/content-title.component';
import { PanelContentComponent } from './panel/panel-content/panel-content.component';
import { TableComponent } from './table/table.component';

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
