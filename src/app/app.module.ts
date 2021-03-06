import { SeriesService } from './../provider/series.service';
import { EpisodesPage } from './../pages/episodes/episodes';
import { SeasonsPage } from './../pages/seasons/seasons';
import { SeriesPage } from './../pages/series/series';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TechnischerService } from './../provider/technischer.service';
import { MySeriesListService } from './../provider/myserieslist.service';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';

//export const BASEPATH = 'http://localhost:8080';
export const BASEPATH = 'http://testoknof.de:8080';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    SeriesPage,
    SeasonsPage,
    EpisodesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    SeriesPage,
    SeasonsPage,
    EpisodesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TechnischerService,
    MySeriesListService,
    SeriesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
