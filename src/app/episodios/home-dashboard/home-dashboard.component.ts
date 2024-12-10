import { Component } from '@angular/core';
import { EpisodioService } from '../servicios/episodio.service';
import { Episodios } from '../modelos/episodios';
import { InformaciónEpisodio } from '../modelos/información-episodio';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrl: './home-dashboard.component.css'
})
export class HomeDashboardComponent {
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

  episodios: InformaciónEpisodio [] = [];

  constructor(private servicioEpisodio: EpisodioService){}

  ngOnInit(): void {
      this.servicioEpisodio.obtenerEpisodios().subscribe(
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

  seeEpisodes(): void {

  }

  seeFavorites(): void {

  }
}
