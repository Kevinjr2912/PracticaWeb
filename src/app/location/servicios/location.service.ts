import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocationReceived } from '../modelos/ilocation-received';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http: HttpClient) { }

  getInformationLocation(url: string): Observable<ILocationReceived> {
    return this._http.get<ILocationReceived>(url)
  }
}
