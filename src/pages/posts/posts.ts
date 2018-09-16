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
    //   .pipe(map(actions => actions.map(a => {
    //     console.log('anything?');
    //     console.log(a);
    //     const data = a.payload.doc.data() as Post;
    //     const id = a.payload.doc.id;
    //     console.log(data);
    //     console.log(id);
    //     return { id, ...data };
    //   }))
    // );
    .subscribe(res => {
      res.map(item => {
        const data = item.payload.doc.data() as Post;
        const id = item.payload.doc.id;
        this.posts.push({ id, ...data });
      })
      console.log(this.posts);
      // let a = this.postService.getPost(res);
      // this.posts = res;
      // return this.posts;
    })
  }

  runThing() {
    // console.log(this.posts);
  }

}