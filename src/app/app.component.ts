import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /**es un alias para conocer el componente en HTML */
  templateUrl: './app.component.html', /**esta es la direccion del template, el template es la plantilla*/
  styleUrls: ['./app.component.scss'] /**esta es la direccion de las hojas de estilo, en esta puedo tener una o mil (es la unica)*/
})

/**exportamos los componentes */
export class AppComponent { 
  /**data binding, consisten en la sincronia que tiene le type script con el HTML*/
  title = 'Mensaje Data Binding';
  numero = 5


  
}
