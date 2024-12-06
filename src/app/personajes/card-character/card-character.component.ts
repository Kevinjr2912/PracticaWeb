import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.css'
})
export class CardCharacterComponent {
  @Input() character: Ipersonaje = {
    
  }
}
