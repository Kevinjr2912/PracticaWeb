import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformacionPersonaje } from '../modelos/informacion-personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajeService {

  constructor(private _http: HttpClient) { }

  obtenerInformacionPersonaje(url: string): Observable<InformacionPersonaje> {
    return this._http.get<InformacionPersonaje>(url)
  }
}
