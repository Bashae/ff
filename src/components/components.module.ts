import { NgModule } from '@angular/core';
import { PostComponent } from './post/post';
import { HeaderComponent } from './header/header';
import { SinogramComponent } from './sinogram/sinogram';
import { BackgroundModalComponent } from './background-modal/background-modal';
import { ColorColumnComponent } from './color-column/color-column';

@NgModule({
	declarations: [PostComponent,
    HeaderComponent,
    SinogramComponent,
    BackgroundModalComponent,
    ColorColumnComponent],
	imports: [],
	exports: [PostComponent,
    HeaderComponent,
    SinogramComponent,
    BackgroundModalComponent,
    ColorColumnComponent]
})
export class ComponentsModule {}
