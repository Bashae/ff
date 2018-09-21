import { NgModule } from '@angular/core';
import { PostComponent } from './post/post';
import { HeaderComponent } from './header/header';
import { SinogramComponent } from './sinogram/sinogram';

@NgModule({
	declarations: [PostComponent,
    HeaderComponent,
    SinogramComponent],
	imports: [],
	exports: [PostComponent,
    HeaderComponent,
    SinogramComponent]
})
export class ComponentsModule {}
