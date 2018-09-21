import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-light-posts',
  templateUrl: 'light-posts.html',
})
export class LightPostsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('get all posts of good nature');
    // Add row/cell for overall_status: 'good' or 'bad'
    // While liking, compare good votes & bad votes.
    // If bad votes are greater, overall_status is bad
    // If good votes, overall_status is good
    // Default to Good if Neutral.
  }

}
