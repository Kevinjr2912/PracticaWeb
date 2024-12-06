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
  episodio: InformaciónEpisodio = {
    id: 0,
    name: '',
    air_date: new Date(),
    episode: '',
    characters: [],
    url: ''
  }

  personajes: InformacionPersonaje [] = [];

  constructor(private servicioEpisodio: EpisodioService, private servicioPersonaje: PersonajeService ){}

  ngOnInit(): void {
    this.consumirServicioEpisodio();
  }

  consumirServicioEpisodio(){
    this.servicioEpisodio.obtenerInformacionEpisodio(3).subscribe(
      (response) => {
        this.episodio = response;
        this.consumirServicioPersonaje();
      },
      (err) => {console.log('Error ' + err)}
    )
  }

  consumirServicioPersonaje() {
      this.episodio.characters.forEach(urlPersonaje => {
        this.servicioPersonaje.obtenerInformacionPersonaje(urlPersonaje).subscribe(
          (response) => {
            console.log(response)
            let personaje: InformacionPersonaje = {
              id: response.id,
              name: response.name,
              status: response.status,
              species: response.species,
              type: response.type,
              gender: response.gender,
              origin: response.origin,
              image: response.image
            };

            this.personajes.push(personaje);
            
          },
          (err) => {
            console.log(err)
          }
        )
      });
  }
}
