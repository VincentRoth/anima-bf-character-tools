import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { CreationHelpComponent } from './creation-help/creation-help.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dice-roll', component: DiceRollComponent },
  { path: 'creation-help', component: CreationHelpComponent },
  { path: 'advantages', component: AdvantagesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
