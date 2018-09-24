import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LikesPage } from '../pages/likes/likes';
import { PostsPage } from '../pages/posts/posts';
import { PostComponent } from '../components/post/post';
import { SinogramComponent } from '../components/sinogram/sinogram';
import { NewPostPage } from '../pages/new-post/new-post';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { LandingPage } from '../pages/landing/landing';
import { SidebarPage } from '../pages/sidebar/sidebar';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { AuthProvider } from '../providers/auth/auth';
import { HeaderComponent } from '../components/header/header';
import { PostProvider } from '../providers/post/post';

import { DarkPostsPage } from '../pages/dark-posts/dark-posts';
import { LightPostsPage } from '../pages/light-posts/light-posts';
import { BackgroundModalPage } from '../pages/background-modal/background-modal';

import { AdMobFree } from '@ionic-native/admob-free';

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
    BackgroundModalPage,
    HomePage,
    FavoritesPage,
    LandingPage,
    LikesPage,
    LightPostsPage,
    DarkPostsPage,
    LoginPage,
    PostsPage,
    PostComponent,
    SinogramComponent,
    NewPostPage,
    RegistrationPage,
    SidebarPage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BackgroundModalPage,
    HomePage,
    FavoritesPage,
    LightPostsPage,
    DarkPostsPage,
    LandingPage,
    LikesPage,
    LoginPage,
    PostsPage,
    PostComponent,
    SinogramComponent,
    NewPostPage,
    RegistrationPage,
    SidebarPage,
    HeaderComponent
  ],
  providers: [
    AuthProvider,
    AdMobFree,
    PostProvider,
    AngularFireAuth,
    AngularFirestore,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
