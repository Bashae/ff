import { Component } from '@angular/core';

/**
 * Generated class for the SinogramComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sinogram',
  templateUrl: 'sinogram.html'
})
export class SinogramComponent {

  text: string;

  constructor() {
    console.log('Hello SinogramComponent Component');
    this.text = 'Hello World';
  }

}
