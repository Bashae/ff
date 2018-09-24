import { Component, Input } from '@angular/core';

@Component({
  selector: 'color-column',
  templateUrl: 'color-column.html'
})
export class ColorColumnComponent {
  @Input() hex: string = "#000";
  @Input() rgb: string = "000";

  constructor() {
    console.log('hex');
    console.log(this.hex);
    console.log('rgb');
    console.log(this.rgb);
  }

}
