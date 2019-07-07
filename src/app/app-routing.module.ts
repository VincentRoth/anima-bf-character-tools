import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { AdvantagesComponent } from './advantages/advantages.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dice-roll', component: DiceRollComponent },
  { path: 'advantages', component: AdvantagesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
