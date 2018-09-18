import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { Observable } from 'rxjs-compat';

import { map } from 'rxjs/operators';
import { Post } from '../../app/post';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  posts: any[] = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public postService: PostProvider
  ) {
    // this.posts = this.postService.getAllPosts().valueChanges();
    // console.log('posts are');
    // console.log(this.posts);

    this.postService.getAllPosts()
      .then(res => {
        this.posts = [];
        res.docs.forEach(doc => {
          this.posts.push(doc.data())
        })
      });
  }

  runThing() {
    // console.log(this.posts);
  }

}