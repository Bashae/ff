import { NgModule } from '@angular/core';
import { PostComponent } from './post/post';
import { SinogramComponent } from './sinogram/sinogram';

@NgModule({
	declarations: [PostComponent,
    SinogramComponent],
	imports: [],
	exports: [PostComponent,
    SinogramComponent]
})
export class ComponentsModule {}
