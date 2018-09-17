import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../../pages/landing/landing';
import { AuthProvider } from '../../providers/auth/auth';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent {
  @Input() postItem: any;
  liked: boolean = false;
  favorited: boolean = false;
  text: string;
  likeCount: number = 500;
  favoriteCount: number = 45;
  noAuthAttempt: number = 0;

  cardBackground: string;
  cardColor: any;
  cardTextColor: any;

  constructor(
    public navCtrl: NavController,
    public auth: AuthProvider,
    public postService: PostProvider
  ) {}

  ngOnInit() {
    this.favoriteCount = this.postItem.favorites;
    this.likeCount = this.postItem.likes;
    this.text = this.postItem.content;
    this.cardBackground = this.postItem.background;
    this.cardColor = this.postItem.overlay_color;
    this.cardTextColor = this.postItem.text_color;

    // console.log(this.postItem.id);
  }

  favoritePost() {
    if(this.auth.user) {
      if(this.favorited) {
        this.favorited = false;
        this.favoriteCount--;
      } else {
        this.favorited = true;
        this.favoriteCount++;
      }
    } else {
      if ( this.noAuthAttempt < 3 ) {
        this.noAuthAttempt++;
      } else {
        this.navCtrl.push(LandingPage);
      }
    }
  }

  likePost(post) {
    if(this.auth.user) {
      if(this.liked) {
        this.liked = false;
        this.likeCount--;
        post.likes = this.likeCount;
        this.postService.unlikePost(post);
      } else {
        this.liked = true;
        this.likeCount++;
        post.likes = this.likeCount;
        this.postService.likePost(post);
      }
    } else {
      if ( this.noAuthAttempt < 2 ) {
        this.noAuthAttempt++;
      } else {
        this.navCtrl.push(LandingPage);
      }
    }
  }

  sharePost() {
    console.log('user shared post');
  }

  goToPage() {
    this.navCtrl.push(LandingPage);
  }

}
