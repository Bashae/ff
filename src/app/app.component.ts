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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  footer: boolean = true;
  rootPage: any = PostsPage;
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
    this.tab2 = LikesPage;
    this.tab3 = FavoritesPage;
  }

  openNewPostModal() {
    if ( this.auth.user ) {
      console.log('a');
      const modal = this.modalCtrl.create(NewPostPage);
      modal.present();
    } else {
      console.log('b');
      // this.goToPage('Landing');
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

