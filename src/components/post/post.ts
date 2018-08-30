import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../../pages/landing/landing';

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {
  @Input() postItem: any;
  liked: boolean = false;
  favorited: boolean = false;
  text: string;

  constructor(public navCtrl: NavController) {
  }

  favoritePost() {
    this.favorited = true;
    console.log(this);
  }

  likePost() {
    this.liked = true;
  }

  sharePost() {
    console.log('user shared post');
  }

  goToPage() {
    this.navCtrl.push(LandingPage);
  }

}
