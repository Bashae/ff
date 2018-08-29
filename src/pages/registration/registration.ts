import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  attemptSignUp() {
    let credentials = {
      email: "ice.andrew.media@gmail.com",
      password: "Cupcak3s123!"
    }

    this.auth.signUpWithEmail(credentials)
      .then(
        (res) => {console.log(res)},
        (err) => {console.log(err)}
      )
  }

}
