import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SinogramComponent } from './sinogram/sinogram';
import { PostComponent } from './post/post';

@NgModule({
	declarations: [SinogramComponent,
	PostComponent],
	imports: [],
	exports: [SinogramComponent,
	PostComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class ComponentsModule {}
