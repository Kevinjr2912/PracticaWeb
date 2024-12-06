import { Component, OnInit } from '@angular/core';
import { EpisodioService } from './episodios/servicios/episodio.service';
import { Episodios } from './episodios/modelos/episodios';
import { InformaciónEpisodio } from './episodios/modelos/información-episodio';

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
      air_date: new Date(),
      episode: '',
      characters: [],
      url: '',
      created: new Date()
    }]
  }

  episodios: InformaciónEpisodio [] = [];

  constructor(private apiService: EpisodioService){}

  ngOnInit(): void {
      this.apiService.obtenerEpisodios().subscribe(
        (response) => {
          this.episodiosObtenidos.results = response.results;
          this.asociarInformacionPersonaje();
        },
        (err) => {console.log('Error ' + err)}
      )
  }

  asociarInformacionPersonaje(): void {
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

  }
  
}
