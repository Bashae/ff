import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { AuthProvider } from '../../providers/auth/auth';

import { AdMobFree } from '@ionic-native/admob-free';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html'
})
export class PostsPage {
  hideScroll: boolean = false;
  lastItem: any;
  posts: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider,
    public postService: PostProvider,
    public events: Events,
    public admob: AdMobFree
  ) {
    this.getStartPosts();
    this.events.subscribe('post:created', (res) => {
      this.getStartPosts();
      this.prepareAdMob();
    });
  }

  prepareAdMob() {
    this.admob.banner.config({id: 'ca-app-pub-8071301998700750/2198021539', isTesting: false, autoShow: true});
    this.admob.banner.prepare().then(() => {this.admob.banner.show();}).catch(e => console.log(e));
  }

  getStartPosts() {
    this.postService.getStartPosts()
      .then(res => {
        this.posts = [];
        if(res.docs.length > 0) {
          res.docs.forEach(doc => {
            this.posts.push(doc.data())
            this.lastItem = doc;
          })
        } else {
          let post = {
            background: '011',
            content: 'Hello World, This is going.',
            id: 1,
            favorites: 10,
            likes: 10,
            overlay_color: 'rgba(0, 0, 0, .35)',
            text_color: 'rgba(255, 255, 255)',
            timestamp: '12345',
            u_id: '1'
          };
          this.posts.push(post);
        }
      })
  }

  doInfinite(evt) {
    this.postService.getNextPosts(this.lastItem)
      .then(res => {
        if(res.empty) {
          this.hideScroll = true;
          evt.complete();
        } else {
          res.docs.forEach(doc => {
            this.posts.push(doc.data());
            this.lastItem = doc;
          })
          evt.complete();
        }
      });
  }

}