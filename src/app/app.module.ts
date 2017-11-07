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

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';

export const BASEPATH = 'http://localhost:8080';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    SeriesPage,
    SeasonsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    SeriesPage,
    SeasonsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TechnischerService,
    MySeriesListService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
