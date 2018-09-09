import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthProvider {
  public user: firebase.User;
  public isLoggedIn: boolean = false;

  constructor(
    public afAuth: AngularFireAuth
    ) {
    afAuth.authState.subscribe(user => {
      this.user = user;
      if(user) {
        this.isLoggedIn = true;
      }
    })
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
