import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-post',
  templateUrl: 'new-post.html',
})
export class NewPostPage {
  mysin: String;
  postItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.postItem = "hello world";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPostPage');
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  submitPost() {
    console.log("User's Post is:");
    console.log(this.mysin);
  }

}
