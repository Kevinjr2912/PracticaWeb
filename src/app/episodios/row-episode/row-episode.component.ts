import { Component,Input } from '@angular/core';
import { InformaciónEpisodio } from '../modelos/información-episodio';

@Component({
  selector: 'tr.table-row-location',
  templateUrl: './row-episode.component.html',
  styleUrl: './row-episode.component.css'
})
export class RowEpisodeComponent {
  @Input() episode: InformaciónEpisodio = {
    id: 0,
    name: '',
    air_date: '',
    episode: '',
    characters: [],
    url: '',
  }
}
