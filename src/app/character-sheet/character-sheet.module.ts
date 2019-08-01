import { NgModule } from '@angular/core';
import { CharacterSheetComponent } from './character-sheet.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CharacterSheetComponent],
  imports: [SharedModule]
})
export class CharacterSheetModule {}
