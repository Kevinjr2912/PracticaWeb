import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardLocationComponent } from './card-location/card-location.component';

@NgModule({
  declarations: [
    CardLocationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardLocationComponent
  ]
})
export class LocationModule { }
