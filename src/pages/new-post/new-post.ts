import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PostProvider } from '../../providers/post/post';
import { Post } from '../../app/post';
import { AngularFirestore } from 'angularfire2/firestore';

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {
  cardBackground: string;
  cardText: string;
  cardColor: any;
  cardTextColor: any;
  
  postItem: any;

  backgroundToggle: boolean = false;
  colorToggle: boolean = false;
  textToggle: boolean = false;
  overlayToggle: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public postService: PostProvider,
    public afs: AngularFirestore
  ) {
    // this.postItem = "hello world";
    this.cardBackground = "010";
    this.cardText       = "Your sin will go here.";
    this.cardColor      = "rgba(255, 255, 255, 0.65)";
    this.cardTextColor  = "rgb(255, 255, 255)";
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  submitPost() {
    if(this.cardText) {
      let sin = <Post> {
        background: this.cardBackground,
        content: this.cardText,
        favorites: 0,
        likes: 0,
        overlay_color: this.cardColor,
        text_color: this.cardTextColor,
        u_id: "1"
      }
      
      sin.content = this.cardText;
      this.postService.createPost(sin);
    }
  }

  changeTextBackgroundColor(rgb) {
    this.cardColor = "rgba(" + rgb + ", .65)";
  }

  changeTextColor(rgb) {
    this.cardTextColor = "rgb(" + rgb + ")";
  }

  changeBackgroundImage(url) {
    this.cardBackground = url;
  }

}
