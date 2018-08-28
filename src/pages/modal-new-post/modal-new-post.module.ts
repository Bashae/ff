import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalNewPostPage } from './modal-new-post';

@NgModule({
  declarations: [
    ModalNewPostPage,
  ],
  imports: [
    IonicPageModule.forChild(ModalNewPostPage),
  ],
})
export class ModalNewPostPageModule {}
