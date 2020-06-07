import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdvantagesComponent } from './advantages/advantages.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { ClassesComponent } from './classes/classes.component';
import { CreationHelpComponent } from './creation-help/creation-help.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { RacesComponent } from './races/races.component';
import { SpellsComponent } from './spells/spells.component';
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dice-roll', component: DiceRollComponent },
  { path: 'character-sheet', component: CharacterSheetComponent },
  { path: 'creation-help', component: CreationHelpComponent },
  { path: 'races', component: RacesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'advantages', component: AdvantagesComponent },
  { path: 'spells', component: SpellsComponent },
  { path: 'map', component: MapComponent },
  { path: 'tables', component: TablesComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
