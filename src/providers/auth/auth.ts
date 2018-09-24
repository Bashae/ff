import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
  public user: firebase.User;
  public isLoggedIn: boolean;

  constructor(
    public afAuth: AngularFireAuth
    ) {
      this.setAuth();
    }

  setAuth() {
    this.afAuth.authState.subscribe(user => {
      
      if(user) {
        this.isLoggedIn = true;
        this.user = user;
      } else {
        this.isLoggedIn = false;
        this.user = null;
      }
    })
  }

  getUserInfo() {
    return this.user;
  }

  signInWithEmail(credentials) {
    return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  signUpWithEmail(credentials) {
    return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  logOut() {
    return this.afAuth.auth.signOut();
  }

}
