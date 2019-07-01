import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { AdvantageComponent } from './advantage/advantage.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'dice-roll', component: DiceRollComponent },
  { path: 'advantages', component: AdvantageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
