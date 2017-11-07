import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SeasonsPage } from './seasons';

@NgModule({
  declarations: [
    SeasonsPage,
  ],
  imports: [
    IonicPageModule.forChild(SeasonsPage),
  ],
})
export class SeasonsPageModule {}
