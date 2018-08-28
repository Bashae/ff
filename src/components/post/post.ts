import { Component } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {

  text: string;

  constructor() {
  }

  favoritePost() {
    console.log('user favorited post');
  }

  likePost() {
    console.log('user liked post');
  }

  sharePost() {
    console.log('user shared post');
  }

}
