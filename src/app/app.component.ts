import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { LikesPage } from '../pages/likes/likes';
import { PostsPage } from '../pages/posts/posts';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PostsPage;
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.tab1 = PostsPage;
    this.tab2 = LikesPage;
    this.tab3 = FavoritesPage;
  }
}

