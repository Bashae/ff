import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { Post } from '../../app/post';

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {
  mysin: string;
  postItem: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public postService: PostProvider
  ) {
    // this.postItem = "hello world";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  submitPost() {
    if(this.mysin) {
      let sin = {};
      sin.content = this.mysin;

      this.postService.createPost(sin);
    }
  }

}
