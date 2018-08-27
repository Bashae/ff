import { Component } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {

  text: string;

  constructor() {
    console.log('Hello PostComponent Component');
    this.text = 'Hello World';
  }

}
