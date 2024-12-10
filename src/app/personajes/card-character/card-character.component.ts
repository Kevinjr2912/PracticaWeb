import { Component, Input } from '@angular/core';
import { Ipersonaje } from '../interfaces/ipersonaje';
import { InformacionPersonaje } from '../modelos/informacion-personaje';
import { PersonajeService } from '../servicios/personaje.service';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {
  @Input() url: string = ''
  character: InformacionPersonaje = {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: '',
    image: ''
  }

  constructor(private charServ: PersonajeService){}

  ngOnInit(){
    this.charServ.obtenerInformacionPersonaje(this.url).subscribe(
      response => {
        this.character = response
      },
      error => {
        console.log('Algo salio mal', error);
        
      }
    )
  }
}
