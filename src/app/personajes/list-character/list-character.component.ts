import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EpisodioService } from '../../episodios/servicios/episodio.service';
import { PersonajeService } from '../servicios/personaje.service';
import { InformaciónEpisodio } from '../../episodios/modelos/información-episodio';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrl: './list-character.component.css',
})
export class ListCharacterComponent {
  episode: InformaciónEpisodio = {
    id: 0,
    name: '',
    air_date: '',
    episode: '',
    characters: [],
    url: '',
  };
  visibleCharacters: string[] = [];
  page: number = 0;
  cantVisible: number = 10;

  constructor(
    private router: ActivatedRoute,
    private epiServ: EpisodioService,
    private charServ: PersonajeService
  ) {}

  goBack(): void {
    window.history.back()
  }


  ngOnInit(): void {
    const id = parseInt(this.router.snapshot.paramMap.get('id') || '') || 0;
    this.epiServ.obtenerInformacionEpisodio(id).subscribe(
      (response) => {
        this.episode = response;
      },
      (error) => {
        console.log('Algo salio mal', error);
      }
    );
  }

  ngDoCheck(): void {
    this.updateVisibleCharacters();
  }

  updateVisibleCharacters(): void {
    const indexStart: number = this.page * this.cantVisible;
    const indexEnd: number = indexStart + this.cantVisible;

    this.visibleCharacters = this.episode.characters.slice(
      indexStart,
      indexEnd
    );
  }

  goRight(): void {
    const maxPage =
      Math.ceil(this.episode.characters.length / this.cantVisible) - 1;
    if (this.page < maxPage) {
      this.page += 1;
      this.updateVisibleCharacters();
    }
  }

  goLeft(): void {
    if (this.page > 0) {
      this.page -= 1;
      this.updateVisibleCharacters();
    }
  }
}
