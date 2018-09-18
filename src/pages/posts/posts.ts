import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';

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
    public postService: PostProvider
  ) {
    // this.posts = this.postService.getAllPosts().valueChanges();
    // console.log('posts are');
    // console.log(this.posts);

    this.postService.getStartPosts()
      .then(res => {
        this.posts = [];
        res.docs.forEach(doc => {
          this.posts.push(doc.data())
          this.lastItem = doc;
        })

      });
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