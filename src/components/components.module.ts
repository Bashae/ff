import { NgModule } from '@angular/core';
import { PostComponent } from './post/post';
import { HeaderComponent } from './header/header';
import { SinogramComponent } from './sinogram/sinogram';
import { BackgroundModalComponent } from './background-modal/background-modal';

@NgModule({
	declarations: [PostComponent,
    HeaderComponent,
    SinogramComponent,
    BackgroundModalComponent],
	imports: [],
	exports: [PostComponent,
    HeaderComponent,
    SinogramComponent,
    BackgroundModalComponent]
})
export class ComponentsModule {}
