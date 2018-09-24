import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  hideScroll: boolean = false;
  lastItem: any;
  posts: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public auth: AuthProvider,
    public postService: PostProvider
  ) {
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

  runThing() {
    // console.log(this.posts);
  }

}