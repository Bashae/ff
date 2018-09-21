import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LightPostsPage } from './light-posts';

@NgModule({
  declarations: [
    LightPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(LightPostsPage),
  ],
})
export class LightPostsPageModule {}
