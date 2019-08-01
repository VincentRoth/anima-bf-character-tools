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
import { TablesComponent } from './tables/tables.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dice-roll', component: DiceRollComponent },
  { path: 'character-sheet', component: CharacterSheetComponent },
  { path: 'creation-help', component: CreationHelpComponent },
  { path: 'races', component: RacesComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'advantages', component: AdvantagesComponent },
  { path: 'map', component: MapComponent },
  { path: 'tables', component: TablesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
