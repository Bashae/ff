import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-dark-posts',
  templateUrl: 'dark-posts.html',
})
export class DarkPostsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('get all posts of bad nature');
  }

}
