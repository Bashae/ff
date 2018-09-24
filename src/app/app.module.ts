import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { PostsPage } from '../pages/posts/posts';
import { PostComponent } from '../components/post/post';
import { SinogramComponent } from '../components/sinogram/sinogram';
import { NewPostPage } from '../pages/new-post/new-post';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { AuthProvider } from '../providers/auth/auth';
import { PostProvider } from '../providers/post/post';

import { AdMobFree } from '@ionic-native/admob-free';
import { Events } from 'ionic-angular';

export const firebaseConfig = {
  apiKey: "AIzaSyCr10fnmKIvlRFBw0oxKXu-KC3rf1PMPbo",
  authDomain: "forbiddenfruit-92258.firebaseapp.com",
  databaseURL: "https://forbiddenfruit-92258.firebaseio.com",
  projectId: "forbiddenfruit-92258",
  storageBucket: "forbiddenfruit-92258.appspot.com",
  messagingSenderId: "8140559068"
}

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    PostsPage,
    PostComponent,
    SinogramComponent,
    NewPostPage,
    RegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    PostsPage,
    PostComponent,
    SinogramComponent,
    NewPostPage,
    RegistrationPage,
  ],
  providers: [
    AuthProvider,
    AdMobFree,
    PostProvider,
    AngularFireAuth,
    AngularFirestore,
    Events,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
