import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EpisodiosModule } from './episodios/episodios.module';
import { PersonajesModule } from './personajes/personajes.module';
import { LocationModule } from './location/location.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EpisodiosModule,
    PersonajesModule,
    LocationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
