import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { CharacterSheetComponent } from './character-sheet.component';

@NgModule({
  declarations: [CharacterSheetComponent],
  imports: [SharedModule]
})
export class CharacterSheetModule {}
