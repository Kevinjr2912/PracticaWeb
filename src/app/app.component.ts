import { Component, OnInit } from '@angular/core';
import { EpisodioService } from './episodios/servicios/episodio.service';
import { Episodios } from './episodios/modelos/episodios';
import { InformaciónEpisodio } from './episodios/modelos/información-episodio';
import { PersonajeService } from './personajes/servicios/personaje.service';
import { InformacionPersonaje } from './personajes/modelos/informacion-personaje';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  episodiosObtenidos: Episodios = {
    results :[{
      id: 0,
      name: '',
      air_date: '',
      episode: '',
      characters: [],
      url: '',
      created: new Date()
    }]
  }

  personajes: InformacionPersonaje [] = [];

  constructor(private servicioEpisodio: EpisodioService, private servicioPersonaje: PersonajeService ){}

  
  ngOnInit(): void {
  
  }

  /* asociarInformacionPersonaje(): void {
    this.episodiosObtenidos.results.forEach(episodio => {
      let episodioInformación: InformaciónEpisodio = {
        id: episodio.id,
        name: episodio.name,
        air_date: episodio.air_date,
        episode: episodio.episode,
        characters: episodio.characters,
        url: episodio.url
      }

      this.episodios.push(episodioInformación);
    }); 

  }*/
  
  seeEpisodes(): void {}

  seeFavorites(): void {}
}
