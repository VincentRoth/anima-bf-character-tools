import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { PanelContentComponent } from './panel/panel-content/panel-content.component';
import { ContentTitleComponent } from './panel/content-title/content-title.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TableComponent, PanelContentComponent, ContentTitleComponent],
  imports: [CommonModule, RouterModule],
  exports: [TableComponent, PanelContentComponent, ContentTitleComponent]
})
export class SharedModule {}
