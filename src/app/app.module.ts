import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, ViewChild } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

// App And Pages
import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { NewPostPage } from '../pages/new-post/new-post';
import { PostsPage } from '../pages/posts/posts';
import { RegistrationPage } from '../pages/registration/registration';

// Native Tools
import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { AdMobFree } from '@ionic-native/admob-free';
import { Events } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';

// Services
import { AuthProvider } from '../providers/auth/auth';
import { PostProvider } from '../providers/post/post';
import { SinogramComponent } from '../components/sinogram/sinogram';
import { PostComponent } from '../components/post/post';

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
    NewPostPage,
    PostsPage,
    RegistrationPage,
    SinogramComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    NewPostPage,
    PostsPage,
    RegistrationPage,
    SinogramComponent,
    PostComponent
  ],
  providers: [
    AdMobFree,
    AuthProvider,
    AngularFireAuth,
    AngularFirestore,
    Events,
    PostProvider,
    SocialSharing,
    StatusBar,
    SplashScreen,
    ViewChild,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
