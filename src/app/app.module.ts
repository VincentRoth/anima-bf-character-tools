import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { HomeModule } from './home/home.module';
import { DiceRollModule } from './dice-roll/dice-roll.module';
import { AdvantageModule } from './advantage/advantage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    HomeModule,
    DiceRollModule,
    AdvantageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
