import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../../pages/landing/landing';

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {
  @Input() postItem: any;
  text: string;

  constructor(public navCtrl: NavController) {
  }

  favoritePost() {
    console.log('user favorited post');
    console.log(this.postItem);
  }

  likePost() {
    console.log('user liked post');
  }

  sharePost() {
    console.log('user shared post');
  }

  goToPage() {
    this.navCtrl.push(LandingPage);
  }

}
