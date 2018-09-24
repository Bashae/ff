import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackgroundModalPage } from './background-modal';

@NgModule({
  declarations: [
    BackgroundModalPage,
  ],
  imports: [
    IonicPageModule.forChild(BackgroundModalPage),
  ],
})
export class BackgroundModalPageModule {}
