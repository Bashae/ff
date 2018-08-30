import { Component, Input, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { LandingPage } from '../../pages/landing/landing';

@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {
  @ViewChild(Nav) nav: Nav;
  @Input() content: any;
  text: string;

  constructor() {
  }

  goToPage() {
    this.nav.push(LandingPage);
  }

}
