import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';
import { PostsPage } from '../posts/posts';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string;
  password: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public auth: AuthProvider) {
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
        (err) => { console.log(err) }
      )
  }

}
