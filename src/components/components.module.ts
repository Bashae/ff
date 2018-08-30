import { NgModule } from '@angular/core';
import { PostComponent } from './post/post';
import { HeaderComponent } from './header/header';

@NgModule({
	declarations: [PostComponent,
    HeaderComponent],
	imports: [],
	exports: [PostComponent,
    HeaderComponent]
})
export class ComponentsModule {}
