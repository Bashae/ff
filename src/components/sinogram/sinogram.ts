import { Component } from '@angular/core';

@Component({
  selector: 'sinogram',
  templateUrl: 'sinogram.html'
})
export class SinogramComponent {
  finalCount: string;

  constructor() {
    let goodLikes = 500;
    // Receive Good Likes
    let badLikes = 250;
    // Receive Bad Likes
    let totalLikes = goodLikes + badLikes;

    let totalInFrame = 0;
    if(goodLikes > badLikes) {
      totalInFrame = goodLikes - badLikes;
    } else {
      totalInFrame = badLikes - goodLikes;
    }
    this.finalCount = ((totalInFrame * 100) / totalLikes) + "%";
  }

}
