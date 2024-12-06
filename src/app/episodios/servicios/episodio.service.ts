import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episodios } from '../modelos/episodios';

@Injectable({
  providedIn: 'root'
})
export class EpisodioService {

  constructor(private _http: HttpClient) { }

  obtenerEpisodios(): Observable<Episodios> {
    return this._http.get<Episodios>('https://rickandmortyapi.com/api/episode');
  }

}
