import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardCharacterComponent } from './card-character/card-character.component';
import { ListCharacterComponent } from './list-character/list-character.component';


@NgModule({
  declarations: [
    CardCharacterComponent,
    ListCharacterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PersonajesModule { }
