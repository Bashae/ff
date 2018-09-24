import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PostsPage } from '../pages/posts/posts';

import { ModalController } from 'ionic-angular';
import { NewPostPage } from '../pages/new-post/new-post';
import { LandingPage } from '../pages/landing/landing';
import { AuthProvider } from '../providers/auth/auth';
import { DarkPostsPage } from '../pages/dark-posts/dark-posts';
import { LightPostsPage } from '../pages/light-posts/light-posts';

import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  footer: boolean = true;
  tab1: any;
  tab2: any;
  tab3: any;
  view: any;
  rootPage: any;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen, 
    public modalCtrl: ModalController,
    public auth: AuthProvider,
    private admob: AdMobFree
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
      this.auth.setAuth();
    });

    this.tab1 = PostsPage;
    this.tab2 = DarkPostsPage;
    this.tab3 = LightPostsPage;
    this.rootPage = PostsPage;
    this.prepareAdMob();
  }

  prepareAdMob() {
    const bannerConfig: AdMobFreeBannerConfig = {
      id: 'ca-app-pub-8071301998700750/2198021539',
      isTesting: true,
      autoShow: true
     };
     this.admob.banner.config(bannerConfig);
     this.admob.banner.prepare()
       .then(() => {})
       .catch(e => console.log(e));
  }

  openNewPostModal() {
    if ( this.auth.isLoggedIn ) {
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
      if(this.auth.isLoggedIn) {
        this.logOut();
      } else {
        this.footer = false;
        this.nav.push(LandingPage);
      }
    }
  }

  logOut() {
    this.auth.logOut();
    this.goToPage('Posts');
  }
}

