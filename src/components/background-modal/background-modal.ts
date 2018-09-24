import { Component } from '@angular/core';

/**
 * Generated class for the BackgroundModalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'background-modal',
  templateUrl: 'background-modal.html'
})
export class BackgroundModalComponent {

  text: string;

  constructor() {
    console.log('Hello BackgroundModalComponent Component');
    this.text = 'Hello World';
  }

}
