import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  
  }

  attemptLogin() {
    let credentials = {
      email: "ice.andrew.media@gmail.com",
      password: "Cupcak3s123!"
    }

    this.auth.signInWithEmail(credentials)
      .then(
        (res) => { console.log(res) },
        (err) => { console.log(err) }
      )
  }

}
