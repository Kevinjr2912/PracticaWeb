import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { LocationService } from '../../location/servicios/location.service';
import { ILocationReceived } from '../../location/modelos/ilocation-received';
import { LocationModule } from "../../location/location.module";

@Component({
  selector: 'app-modal-personaje',
  templateUrl: './modal-personaje.component.html',
  styleUrl: './modal-personaje.component.css'
})
export class ModalPersonajeComponent implements OnChanges {
  @Input() visible: boolean = false
  @Output() visibleChange = new EventEmitter<boolean>()
  @Input() url: string = '';
  location: ILocationReceived = {
    name: '',
    type: '',
    dimension: '',
    created: ''
  }

  constructor(private locationService: LocationService){}

   ngOnChanges(): void {
    console.log("Se recibe la url " + this.url)
      this.locationService.getInformationLocation(this.url).subscribe(
        (response) => {
          console.log(response)
          this.location = response;
        },
        (err) => { console.log(err) }
      )
   } 

  changeVisibility(): void {
    this.visibleChange.emit(!this.visible)
  }

  // addGrupo(){
  //   if(this.grupo.grade && this.grupo.group){
  //     this.grpSrv.add(this.grupo).subscribe(
  //       (respuesta) => {
  //         console.log('Grupo agregado con éxito:', respuesta);
  //         this.grupos.push(this.grupo); // Agrega el nuevo grupo al arreglo de grupos
  //         this.gruposChange.emit(this.grupos)
  //       },
  //       (error) => {
  //         console.error('Error al agregar el grupo:', error);
  //       }
  //     );
  //     this.visibleChange.emit(!this.visible)
  //   }
  //   else {
  //     alert('Completa todos los campos xfi u.u')
  //   }
  // }
}
