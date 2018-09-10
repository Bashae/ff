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
  mysin: string = "Your sin will go here.";
  postItem: any;

  backgroundToggle: boolean = false;
  colorToggle: boolean = false;
  textToggle: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public postService: PostProvider
  ) {
    // this.postItem = "hello world";
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  submitPost() {
    if(this.mysin) {
      let sin = {
        content: ""
      }
      
      sin.content = this.mysin;

      this.postService.createPost(sin);
    }
  }

}
