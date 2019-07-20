import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { CreationHelpComponent } from './creation-help/creation-help.component';
import { TablesComponent } from './tables/tables.component';
import { RacesComponent } from './races/races.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dice-roll', component: DiceRollComponent },
  { path: 'creation-help', component: CreationHelpComponent },
  { path: 'races', component: RacesComponent },
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
