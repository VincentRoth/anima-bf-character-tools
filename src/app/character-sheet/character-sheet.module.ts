import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterSheetComponent } from './character-sheet.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CharacterSheetComponent],
  imports: [CommonModule, SharedModule]
})
export class CharacterSheetModule {}
