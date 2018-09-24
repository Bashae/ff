import { Component } from '@angular/core';

import { AuthProvider } from '../../providers/auth/auth';
import { PostProvider } from '../../providers/post/post';

@Component({
  selector: 'sinogram',
  templateUrl: 'sinogram.html'
})
export class SinogramComponent {
  finalCount: any;

  constructor(
    public auth: AuthProvider, 
    public postService: PostProvider
    ) {
    this.finalCount = "50%";

    if(this.auth.isLoggedIn) {
      let goodLikeCount, badLikeCount, totalLikes;
      let goodLikes = this.postService.getGoodLikes();
      goodLikes.then(res => {
        goodLikeCount = res.docs.length;    
      })
      let badLikes = this.postService.getBadLikes();
      badLikes.then(res => {
        badLikeCount = res.docs.length;
      })
      Promise.all([goodLikes, badLikes]).then(res => {
        let totalInFrame = 0;
        let totalLikes = goodLikeCount + badLikeCount;

        if(goodLikeCount > badLikeCount) {
          totalInFrame = goodLikeCount - badLikeCount;
          this.finalCount = (((totalInFrame * 100) / totalLikes) / 2);
          this.finalCount = (50 + this.finalCount);
        } else {
          totalInFrame = badLikeCount - goodLikeCount;
          this.finalCount = (((totalInFrame * 100) / totalLikes) / 2);
          this.finalCount = (50 - this.finalCount);
        }

        this.finalCount = Math.round(this.finalCount) + "%";
      })
    }
  }
}
