import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrationPage } from '../registration/registration';
import { AuthProvider } from '../../providers/auth/auth';

import { HomePage } from '../home/home';
import { PostsPage } from '../posts/posts';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {
  username: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth: AuthProvider,
    public alertCtrl: AlertController
  ) {

  }

  attemptLogin() {
    let credentials = {
      email: this.username,
      password: this.password
    }

    this.auth.signInWithEmail(credentials)
      .then(
        (res) => { 
          console.log(res);
          this.navCtrl.push(PostsPage);
        },
        (err) => { 
          console.log(err);
          // this.showAlert();
          if(err.code == "auth/wrong-password") {
            this.showAlert("Please enter the correct password.");
          }
          if(err.code == "auth/invalid-email") {
            this.showAlert("Please enter a valid email address");
          }
        }
      )
  }

  showAlert(msg) {
    const alert = this.alertCtrl.create({
      title: 'Error!',
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }

  goToPage(page) {
    if (page === 'Register') {
      this.navCtrl.push(RegistrationPage);
    }
  }

  logOut() {
    this.auth.logOut();
  }

}
