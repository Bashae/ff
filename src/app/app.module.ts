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
import { NewPostPage } from '../pages/new-post/new-post';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritesPage,
    LikesPage,
    PostsPage,
    PostComponent,
    NewPostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FavoritesPage,
    LikesPage,
    PostsPage,
    PostComponent,
    NewPostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
