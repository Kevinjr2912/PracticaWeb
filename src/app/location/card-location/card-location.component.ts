import { Component, Input } from '@angular/core';
import { ILocationReceived } from '../modelos/ilocation-received';

@Component({
  selector: 'app-card-location',
  templateUrl: './card-location.component.html',
  styleUrl: './card-location.component.css'
})
export class CardLocationComponent {
  @Input() location: ILocationReceived = {
    name: '',
    type: '',
    dimension: '',
    created: ''
  }
}
