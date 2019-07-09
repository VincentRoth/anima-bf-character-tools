import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreationHelpComponent } from './creation-help.component';
import { AppMaterialModule } from '../app-material.module';
import { PanelContentComponent } from './panel-content/panel-content.component';
import { ContentTitleComponent } from './content-title/content-title.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreationHelpComponent,
    PanelContentComponent,
    ContentTitleComponent
  ],
  imports: [CommonModule, SharedModule, AppMaterialModule, RouterModule]
})
export class CreationHelpModule {}
