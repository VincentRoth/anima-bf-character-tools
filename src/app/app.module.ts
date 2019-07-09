import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';
import { HomeModule } from './home/home.module';
import { DiceRollModule } from './dice-roll/dice-roll.module';
import { AdvantagesModule } from './advantages/advantages.module';
import { CreationHelpModule } from './creation-help/creation-help.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    HomeModule,
    DiceRollModule,
    CreationHelpModule,
    AdvantagesModule,
    TablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
