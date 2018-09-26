import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, ViewChild } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

// App And Pages
import { MyApp } from './app.component';
import { LandingPageModule } from '../pages/landing/landing.module';
import { LoginPageModule } from '../pages/login/login.module';
import { NewPostPageModule } from '../pages/new-post/new-post.module';
import { PostsPageModule } from '../pages/posts/posts.module';

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
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NewPostPageModule,
    PostsPageModule,
    LandingPageModule,
    LoginPageModule,
    PostsPageModule,
    NewPostPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
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
