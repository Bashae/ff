import { NgModule } from '@angular/core';
import { PostComponent } from './post/post';
import { SinogramComponent } from './sinogram/sinogram';
import { IonicModule } from 'ionic-angular';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [PostComponent,
    SinogramComponent],
	imports: [IonicModule, CommonModule],
	exports: [PostComponent,
    SinogramComponent]
})
export class ComponentsModule {}
