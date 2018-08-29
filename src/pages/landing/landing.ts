import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  goToPage(page) {
    if (page === 'Login') {
      this.navCtrl.push(LoginPage);
    }

    if (page === 'Register') {
      this.navCtrl.push(RegistrationPage);
    }
  }

  logOut() {
    this.auth.logOut();
  }

}
