import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCharacterComponent } from './card-character/card-character.component';
import { ListCharacterComponent } from './list-character/list-character.component';
import { ModalPersonajeComponent } from './modal-personaje/modal-personaje.component';


@NgModule({
  declarations: [
    CardCharacterComponent,
    ListCharacterComponent,
    ModalPersonajeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonajesModule { }
