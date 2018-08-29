import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritesPage } from '../pages/favorites/favorites';
import { LikesPage } from '../pages/likes/likes';
import { PostsPage } from '../pages/posts/posts';

import { ModalController } from 'ionic-angular';
import { NewPostPage } from '../pages/new-post/new-post';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = PostsPage;
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public modalCtrl: ModalController) {
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

  openNewPostModal() {
    const modal = this.modalCtrl.create(NewPostPage);
    modal.present();
  }
}

