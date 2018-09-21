import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DarkPostsPage } from './dark-posts';

@NgModule({
  declarations: [
    DarkPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(DarkPostsPage),
  ],
})
export class DarkPostsPageModule {}
