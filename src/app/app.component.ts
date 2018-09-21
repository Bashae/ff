import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritesPage } from '../pages/favorites/favorites';
import { LikesPage } from '../pages/likes/likes';
import { PostsPage } from '../pages/posts/posts';

import { ModalController } from 'ionic-angular';
import { NewPostPage } from '../pages/new-post/new-post';
import { LandingPage } from '../pages/landing/landing';
import { AuthProvider } from '../providers/auth/auth';
import { DarkPostsPage } from '../pages/dark-posts/dark-posts';
import { LightPostsPage } from '../pages/light-posts/light-posts';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  footer: boolean = true;
  // rootPage: any = PostsPage;
  tab1: any;
  tab2: any;
  tab3: any;
  view: any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public modalCtrl: ModalController,
    public auth: AuthProvider
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.tab1 = PostsPage;
    this.tab2 = DarkPostsPage;
    this.tab3 = LightPostsPage;
  }

  openNewPostModal() {
    if ( this.auth.user ) {
      const modal = this.modalCtrl.create(NewPostPage);
      modal.present();
    } else {
      this.goToPage('Landing');
    }
  }

  goToPage(page) {
    if(page === 'Posts') {
      this.footer = true;
      this.nav.push(PostsPage);
    }
    if(page === 'Landing') {
      this.footer = false;
      this.nav.push(LandingPage);
    }
  }

  logOut() {
    this.auth.logOut();
  }
}

