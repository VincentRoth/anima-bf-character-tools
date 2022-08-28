import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AdvantagesModule } from './advantages/advantages.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';
import { ClassesModule } from './classes/classes.module';
import { CreationHelpModule } from './creation-help/creation-help.module';
import { DiceRollModule } from './dice-roll/dice-roll.module';
import { HomeModule } from './home/home.module';
import { MapModule } from './map/map.module';
import { RacesModule } from './races/races.module';
import { AppMaterialModule } from './shared/app-material.module';
import { SpellsModule } from './spells/spells.module';
import { TablesModule } from './tables/tables.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AppMaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),

    HomeModule,
    DiceRollModule,
    CharacterSheetModule,
    CreationHelpModule,
    RacesModule,
    ClassesModule,
    AdvantagesModule,
    SpellsModule,
    MapModule,
    TablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
