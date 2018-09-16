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
  username: string = "";
  password: string = "";

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth: AuthProvider,
    public alertCtrl: AlertController
  ) {

  }

  setCredentials() {
    if ( this.username === "" ) {
      this.showAlert("Please enter an email address.");
      return false;
    }

    if ( this.password === "" ) {
      this.showAlert("Please enter a password.");
      return false;
    }
    
    return {
      email: this.username,
      password: this.password
    };
  }

  attemptLogin() {
    let credentials = this.setCredentials();
    if ( !credentials ) { return false; }

    this.auth.signInWithEmail(credentials)
      .then(
        (res) => { 
          this.navCtrl.push(PostsPage);
        },
        (err) => { 
          if(err.code == "auth/wrong-password") {
            this.showAlert("Please enter the correct password.");
          }
          if(err.code == "auth/invalid-email") {
            this.showAlert("Please enter a valid email address");
          }
        }
      )
  }

  attemptRegistration() {
    let credentials = this.setCredentials();
    if ( !credentials ) {  return false; }

    this.auth.signUpWithEmail(credentials)
      .then(
        (res) => {
          console.log(res);
          // Add Account Created toast?
          this.navCtrl.push(PostsPage);
        },
        (err) => {
          console.log(err);
          if(err.code == "auth/email-already-in-use") {
            this.showAlert("This Email already exists.");
          }
          if(err.code == "auth/invalid-email") {
            this.showAlert("Please enter a proper email.");
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
