import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';

import { HomeModule } from './home/home.module';
import { DiceRollModule } from './dice-roll/dice-roll.module';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';
import { CreationHelpModule } from './creation-help/creation-help.module';
import { RacesModule } from './races/races.module';
import { ClassesModule } from './classes/classes.module';
import { AdvantagesModule } from './advantages/advantages.module';
import { MapModule } from './map/map.module';
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
    CharacterSheetModule,
    CreationHelpModule,
    RacesModule,
    ClassesModule,
    AdvantagesModule,
    MapModule,
    TablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
