import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { Observable } from 'rxjs-compat';

@IonicPage()
@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
})
export class PostsPage {
  posts: Observable<any[]>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public postService: PostProvider
  ) {
    // this.posts = this.postService.getAllPosts().valueChanges();
    // console.log('posts are');
    // console.log(this.posts);

    this.postService.getAllPosts()
    .valueChanges()
    .subscribe(res => {
      this.posts = res;
      return this.posts;
    })
  }

  runThing() {
    // console.log(this.posts);
  }

}