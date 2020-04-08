import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material.module';
import { AdvantageComponent } from './advantage/advantage.component';
import { ContentTitleComponent } from './content-title/content-title.component';
import { MagicPathComponent } from './magic-path/magic-path.component';
import { PanelContentComponent } from './panel-content/panel-content.component';
import { SpellComponent } from './spell/spell.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    TableComponent,
    PanelContentComponent,
    ContentTitleComponent,
    AdvantageComponent,
    SpellComponent,
    MagicPathComponent
  ],
  imports: [CommonModule, RouterModule, AppMaterialModule],
  exports: [
    CommonModule,
    RouterModule,
    AppMaterialModule,

    TableComponent,
    PanelContentComponent,
    ContentTitleComponent,
    AdvantageComponent,
    SpellComponent,
    MagicPathComponent
  ]
})
export class SharedModule {}
