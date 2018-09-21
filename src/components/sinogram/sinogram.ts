import { Component } from '@angular/core';

@Component({
  selector: 'sinogram',
  templateUrl: 'sinogram.html'
})
export class SinogramComponent {
  finalCount: any;

  constructor() {
    let goodLikes = 250;
    // Receive Good Likes
    let badLikes = 1000;
    // Receive Bad Likes
    let totalLikes = goodLikes + badLikes;

    let totalInFrame = 0;
    if(goodLikes > badLikes) {
      totalInFrame = goodLikes - badLikes;
      this.finalCount = (((totalInFrame * 100) / totalLikes) / 2);
      this.finalCount = (50 + this.finalCount) + "%";
    } else {
      totalInFrame = badLikes - goodLikes;
      this.finalCount = (((totalInFrame * 100) / totalLikes) / 2);
      this.finalCount = (50 - this.finalCount) + "%";
    }
  }

}
